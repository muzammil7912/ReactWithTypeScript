import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { styleData } from './components/Style';
import { GridBox, components } from './components/data';
import { DragStart, DragStart2 } from './components/DataType';

function Editor() {
  const combinedStyles: Record<string, React.CSSProperties> = {
    ...styleData,
  };
  const handleDragStart = (item: DragStart, e: React.DragEvent<HTMLDivElement>) => {

  }
  const handleDragStart2 = (item: DragStart2, e: React.DragEvent<HTMLDivElement>) => {

  }
  return (
    <div className='main_cont'>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Structure</Accordion.Header>
          <Accordion.Body>
          <div className="drop" >
          <div className='container' >
            {GridBox.map(((item)=>{
              return (
                <div key={item.id} className='row border'  
                draggable={true}
                onDragStart={(e) => handleDragStart(item, e)}>

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

              {components.map((item) => {
                return (
                  <div className='draggable-item' 
                  key={item.id.toString()}  
                  draggable={true}
                  onDragStart={(e) => handleDragStart2(item,e)}>
                    
                  </div>
                  )
                })}
                </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="drop-area" style={combinedStyles["drop-area"]}>

      </div>
    </div>
  )
}

export default Editor