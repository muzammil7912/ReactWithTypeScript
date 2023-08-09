import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Editor() {
  return (
    <div className='main_cont'>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Structure</Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Blocks</Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="drop-area" style={{
        display: "flex",
        border: "1px solid lightgray",
        margin: "0px auto",
        width: "50%",
        overflowY: "auto",
        height: "65vh",
        borderRadius: "20px",
      }}>

      </div>
    </div>
  )
}

export default Editor