import React, { useReducer, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { styleData } from './components/Style';
import { GridBox, components, initialState, selctedDetails } from './components/data';
import { DragStart, DragStart2, DroppedItem, content, e } from './components/DataType';
import { MdFormatAlignLeft } from "react-icons/md"
import { RxButton } from "react-icons/rx"
import { BsCardImage, BsShareFill } from "react-icons/bs"
import { CgSpaceBetweenV } from "react-icons/cg"
import { TfiLayoutMenuSeparated } from "react-icons/tfi"
import { PiUploadSimple, PiVideoFill } from "react-icons/pi"
import { capitalizeFirstLetter, handleDragOver } from './components/common';
import { AllTypeControl } from './components/AllTypeControl';



function Editor() {
  const combinedStyles: Record<string, React.CSSProperties> = {
    ...styleData,
  };
  const Icon = [<MdFormatAlignLeft />, <RxButton />, <BsCardImage />, <BsCardImage />, <BsShareFill />, <CgSpaceBetweenV />, <TfiLayoutMenuSeparated />, <PiUploadSimple />, <PiVideoFill />]


  const [allData, setAllData] = useState({
    "draggedItem": initialState,
    "selctedDetails": selctedDetails
  })

  const handleDragStart = (item: DragStart | DragStart2, e: e) => {
    const serializedData = JSON.stringify(item);
    e.dataTransfer.setData('text/plain', serializedData);
  }
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, item2: any, index: any, index2: any) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('text/plain');
    try {
      const dataToTransfer = JSON.stringify(draggedItemId);
      const draggedBlock = JSON?.parse(dataToTransfer);
      if (JSON.parse(draggedBlock).content2) {
        const updatedDraggedItem = [...allData.draggedItem];
        updatedDraggedItem[index].content[index2].blocks.push(JSON?.parse(draggedBlock));
        setAllData(prevData => ({
          ...prevData,
          "draggedItem": updatedDraggedItem
        }));
      }
    }
    catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };


  const handleDrop2 = (e: e) => {
    e.preventDefault();
    const content = e.dataTransfer.getData('text/plain');
    try {
      const dataToTransfer = JSON.stringify(content);
      const draggedBlock = JSON?.parse(dataToTransfer);
      if (JSON.parse(draggedBlock).content) {
        const closestContainer = Number((e.target as HTMLElement).closest('.new_container')?.getAttribute("data-id")) ?? 0;
        const updatedDraggedItem = [...allData.draggedItem];
        updatedDraggedItem.splice(closestContainer, 0, JSON?.parse(draggedBlock)); // Adding data to the second index
        setAllData(prevData => ({
          ...prevData,
          "draggedItem": updatedDraggedItem
        }));
    }
  }
  catch (error) {
    console.error('Error parsing JSON:', error);
  }
  }
  // type AppState = {
  //   draggedItem: DroppedItem[];
  // };
  const handleBlockClick = (
    index: [number,number,number],
    block: DragStart2
  ) => {
    setAllData((prevData) => ({
      ...prevData,
      selctedDetails: {
        type: block.content2[0].type,
        active: true,
        itemIndex1: index[0],
        itemIndex2: index[1],
        itemIndex3: index[2],
      },
    }));
  };


  return (
    <div className='main_cont'>
      
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Structure</Accordion.Header>
          <Accordion.Body>
            <div className="drop" >
              <div className='container' >
                {GridBox.map(((item) => {
                  const { column, id } = item
                  return (
                    <div key={id} className='row border'
                      draggable={true}
                      onDragStart={(e) => handleDragStart(item, e)}>
                      {column.map((box, index) => {
                        return (
                          <div key={index} className={`col-${box} column`}></div>
                        )
                      })}
                    </div>
                  )
                }))}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Blocks</Accordion.Header>
          <Accordion.Body>
            <div className='drop-container'>

              {components && components.map((item, index) => {
                const { content2 } = item
                return (
                  <div className='draggable-item'
                    key={index}
                    draggable={true}
                    onDragStart={(e) => handleDragStart(item, e)}>
                    {Icon[index]}
                    <p className='m-0'>{capitalizeFirstLetter(content2[0].type)}</p>
                  </div>
                )
              })}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="drop-area" style={combinedStyles["drop-area"]}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop2(e)}
      >
        <div style={combinedStyles["Box1"]}>
          {
            allData.draggedItem?.map((item, index) => {
              const { content } = item;
              return (
                <div className='container new_container' data-id={index} key={index} style={combinedStyles["Box2"]}>
                  {Array.isArray(content) &&
                    content.map((item2, index2) => (
                      <div className={"column1"} key={index2} 
                      style={{ ...combinedStyles["Box3"], width: item2.width }}
                      onDrop={(e) => handleDrop(e, item2, index,index2)}
                      >
                        {item2.blocks.length === 0 ? (
                          <div className='drop_content' style={combinedStyles["Box4"]}>
                            <PiUploadSimple />
                            <div>Drop Content Here</div>
                          </div>
                        ) : (
                          <>
                            {item2.blocks?.map((item3: DragStart2, index3: number) => {
                              const {id} = item3.content2[0]
                              const {selctedDetails} = allData
                              const {itemIndex1,itemIndex2,itemIndex3} = selctedDetails
                              const data = item3.content2[0]
                              return (
                                <div
                                  id={id}
                                  key={index3}
                                  onClick={() => {
                                    handleBlockClick([index,index2,index3],item3); // You might want to pass some arguments here
                                  }}
                                  className={`boxStyle ${(itemIndex1 === index) && (itemIndex2 === index2) && (itemIndex3 === index3 ) && selctedDetails.active ? "active" : "fff"}`}
                                  >
                                    {<AllTypeControl update={setAllData} selctedDetails={allData.selctedDetails}  data={data}/>}
                                
                                </div>
                              )
                            })}
                          </>
                        )}
                      </div>
                    ))}
                </div>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Editor