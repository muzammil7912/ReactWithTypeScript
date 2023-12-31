import React, { useContext, useState,useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { styleData } from './components/Style';
import { GridBox, components, initialState, selctedDetails } from './components/data';
import { DragStart, DragStart2, DroppedItem, e, selctedDetailsType } from './components/DataType';
import { MdFormatAlignLeft } from "react-icons/md"
import { RxButton } from "react-icons/rx"
import { BsCardImage, BsShareFill } from "react-icons/bs"
import { CgSpaceBetweenV } from "react-icons/cg"
import { TfiLayoutMenuSeparated } from "react-icons/tfi"
import { PiUploadSimple, PiVideoFill } from "react-icons/pi"
import { capitalizeFirstLetter, handleDragOver } from './components/common';
import { AllTypeControl } from './components/AllTypeControl';
import {  AllDataContextType, MainCalenderIdContext } from "./context/MainDataUpdateContext";

function Editor() {
  const combinedStyles: Record<string, React.CSSProperties> = {
    ...styleData,
  };
  const Icon = [<MdFormatAlignLeft />, <RxButton />, <BsCardImage />, <BsCardImage />, <BsShareFill />, <CgSpaceBetweenV />, <TfiLayoutMenuSeparated />, <PiUploadSimple />, <PiVideoFill />]
  const context = useContext<AllDataContextType | undefined>(MainCalenderIdContext);
  const { dataupdate = { draggedItem: [], selctedDetails: {} }, setDataupdate = () => {} } = context || {};
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
        const updatedDraggedItem = [...dataupdate.draggedItem];
        updatedDraggedItem[index].content[index2].blocks.push(JSON?.parse(draggedBlock));
        setDataupdate((prevData: any) => ({
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
  
        // Check if dataupdate is defined before accessing it
        if (dataupdate) {
          const updatedDraggedItem = [...dataupdate.draggedItem];
          updatedDraggedItem.splice(closestContainer, 0, JSON?.parse(draggedBlock)); // Adding data to the second index
  
          // Check if setDataupdate is defined before calling it
          if (setDataupdate) {
            setDataupdate((prevData: any) => ({
              ...prevData,
              "draggedItem": updatedDraggedItem
            }));
          }
        }
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }
  
  const handleBlockClick = (
    index: [number,number,number],
    block: DragStart2
  ) => {
    if (dataupdate) {
      setDataupdate((prevData: any) => ({
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
}


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
            dataupdate && dataupdate.draggedItem?.map((item, index) => {
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
  const { id } = item3.content2[0];
  const { selectedDetails } = dataupdate; // Typo corrected here
  const { itemIndex1, itemIndex2, itemIndex3, active } = selectedDetails || {}; // Typo corrected here
  const data = item3.content2[0];
  
  // Check karein ki properties defined hain ya nahi
  if (itemIndex1 !== undefined && itemIndex2 !== undefined && itemIndex3 !== undefined && active !== undefined) {
    return (
      <div
        id={id}
        key={index3}
        onClick={() => {
          handleBlockClick([index, index2, index3], item3);
        }}
        className={`boxStyle ${(itemIndex1 === index) && (itemIndex2 === index2) && (itemIndex3 === index3) && active ? "active" : "fff"}`}
      >
        {<AllTypeControl data={data} />}
      </div>
    );
  }
  return null; // Return null if properties are not defined
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