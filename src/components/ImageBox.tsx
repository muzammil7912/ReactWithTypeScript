import React from 'react';
import { AllBoxProps } from './DataType';
import Empty from '../assets/demo.jpg';

function ImageBox(props: AllBoxProps) {
  const { style,src } = props.data;
  const { align, width, height } = style;
  
  return (
    <div style={{ textAlign: align ?? "left"}}>
      {src ? (
        <img
          src={src}
          alt="Selected"
          style={{
            width: width ? `${width}px` : "100%",
            height: height ? `${height}px` : "100%",
            objectFit: "contain",
            objectPosition: align ?? "left",
          }}
        />
      ) : (
        <div className='contentDiv' style={{ padding: "10px" }}>
          <img src={Empty} alt="img" style={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
}

export default ImageBox;
