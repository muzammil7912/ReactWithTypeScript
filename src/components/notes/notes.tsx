import React from 'react'
type NotesType = {
    "text": string,
    priority?: 'high' | 'medium' | 'low'  
}
function Notes(props:NotesType) {
  return (
    <div className={`notes ${props.priority}`}>{props.text}</div>
  )
}

export default Notes