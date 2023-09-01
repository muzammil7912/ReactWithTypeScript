import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AllBoxProps } from './DataType';


function TextBox({ data, update, selctedDetails }: AllTypeControlProps) {
  const { text } = data;
  
  const editorConfiguration = {
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'fontSize'],
    fontSize: {
      options: [9, 11, 13, 'default', 17, 19, 21]
    },
    removePlugins: ['dropoff'] // Remove the 'easyimage' plugin
  };
  
  return (
    <div className='contentDiv' style={{ padding: '10px' }}>
      <CKEditor
        config={editorConfiguration}
        editor={ClassicEditor}
        data={text}
        onChange={(event: any, editor: any) => {
          const updatedData = editor.getData();
        }}
      />
    </div>
  );
}

export default TextBox;
