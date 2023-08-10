import React, { useReducer } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { styleData } from './components/Style';
import { GridBox, components, initialState } from './components/data';
import { AddItemAtAction, DragStart, DragStart2, DroppedItem, UpdateItemAtAction, content, e } from './components/DataType';
import { MdFormatAlignLeft } from "react-icons/md"
import { RxButton } from "react-icons/rx"
import { BsCardImage, BsShareFill } from "react-icons/bs"
import { CgSpaceBetweenV } from "react-icons/cg"
import { TfiLayoutMenuSeparated } from "react-icons/tfi"
import { PiUploadSimple, PiVideoFill } from "react-icons/pi"
import { capitalizeFirstLetter, handleDragOver } from './components/common';


const reducer = (state: DroppedItem[], action: AddItemAtAction | UpdateItemAtAction) => {
  switch (action.type) {
    case 'UPDATE_ITEM':
      const { item, index } = action.payload;
      const newState = [...state];
      newState.splice(index, 0, item);
      return newState;
    case 'ADD_BLOCK':
      const { item: addItem, index: addIndex } = action.payload;
      return state.map((item) => {
        if (item.content && item.content.some((contentItem) => contentItem.id === addIndex)) {
          return {
            ...item,
            content: item.content.map((contentItem) => {
              if (contentItem.id === addIndex) {
                return {
                  ...contentItem,
                  blocks: [...contentItem.blocks, addItem],
                };
              }
              return contentItem;
            }),
          };
        }
        return item;
      });
    default:
      return state;
  }
};

function Editor() {
  const combinedStyles: Record<string, React.CSSProperties> = {
    ...styleData,
  };
  const Icon = [<MdFormatAlignLeft />, <RxButton />, <BsCardImage />, <BsCardImage />, <BsShareFill />, <CgSpaceBetweenV />, <TfiLayoutMenuSeparated />, <PiUploadSimple />, <PiVideoFill />]


  const [droppedItems, dispatch] = useReducer(reducer, initialState);

  const handleDragStart = (item: DragStart | DragStart2, e: e) => {
    const serializedData = JSON.stringify(item);
    e.dataTransfer.setData('text/plain', serializedData);
  }
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, item2: content) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('text/plain');
    if (draggedItemId && draggedItemId !== "undefined") {
      const draggedBlock = JSON.parse(draggedItemId);
      if (draggedBlock.content2) {
        dispatch({
          type: 'ADD_BLOCK',
          payload: {
            item: draggedBlock, // Assign the value directly here
          },
        });
      }
    }
  };

  const updateItem = (item: DroppedItem, index: number): UpdateItemAtAction => ({
    type: 'UPDATE_ITEM',
    payload: {
      item,
      index,
    },
  });
  const handleDrop2 = (e: e) => {
    e.preventDefault();
    const content = e.dataTransfer.getData('text/plain');
    if (content && content !== "undefined") {
      if (JSON.parse(content).content) {
        const closestContainer = Number((e.target as HTMLElement).closest('.new_container')?.getAttribute("data-id")) ?? 0;
        dispatch(updateItem(JSON.parse(content), 2));
      }
    }
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

              {components.map((item, index) => {
                const { content2 } = item
                return (
                  <div className='draggable-item'
                    key={item.id.toString()}
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
            droppedItems.map((item, index) => {
              const { content } = item;
              return (
                <div className='container new_container' data-id={index} key={index}
                  style={combinedStyles["Box2"]}>
                  {Array.isArray(content) &&
                    content.map((item2, index2) => (
                      <div className={"column1"} key={index2}
                        style={{ ...combinedStyles["Box3"], width: item2.width }}
                        onDrop={(e) => handleDrop(e, [item2])}
                      >
                        {item2.blocks.length === 0 ? (
                          <div className='drop_content' style={{ fontSize: " 11px", margin: "20px 0px", textAlign: "center" }}>
                            <PiUploadSimple />
                            <div>Drop Content Here</div>
                          </div>
                        ) : ""}
                      </div>
                    ))
                  }
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