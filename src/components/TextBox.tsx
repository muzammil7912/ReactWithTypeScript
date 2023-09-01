import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AllTypeControlProps, DroppedItem } from './DataType';


function TextBox({ data, update, allData }: AllTypeControlProps) {
  const {selctedDetails,draggedItem} = allData
  const {itemIndex1,itemIndex2,itemIndex3} = selctedDetails
  const { text } = data;
  const initialState = {
    draggedItem: [] as DroppedItem[], // Ensure it's an array of DroppedItem
    // ... other properties
  };
  
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
          const updatedDraggedItem = { ...draggedItem }; // Make sure it's a single object, not an array
          updatedDraggedItem[itemIndex1].content[itemIndex2].blocks[itemIndex3].content2[0].text = updatedData;
          update((prev) => ({
            ...prev,
            draggedItem: [...prev.draggedItem, updatedDraggedItem]
          }));
        }}
      />
    </div>
  );
}

export default TextBox;
