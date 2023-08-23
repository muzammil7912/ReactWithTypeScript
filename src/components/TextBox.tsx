import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
interface TextBoxProps {
  data: {
    id: number; // Change this to the actual type of 'id'
    active: boolean; // Change this to the actual type of 'active'
    type: string; // Change this to the actual type of 'type'
    text: string; // Change this to the actual type of 'text'
    // Add other properties as needed
  };
}

function TextBox({ data }: TextBoxProps) {
  const { id, active, type, text } = data
  const editorConfiguration = {
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'fontSize'],
    fontSize: {
      options: [9, 11, 13, 'default', 17, 19, 21]
    }
  };
  return (
    <div className='contentDiv' style={{ padding: "10px" }}>
      <CKEditor
        config={editorConfiguration}
        editor={ClassicEditor}
        data={text}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
        }}
      />
    </div>
  )
}

export default TextBox