import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AllTypeControlProps, DroppedItem } from './DataType';
import { styleData } from './Style';

function TextBox({ data, update, allData }: AllTypeControlProps) {
  const combinedStyles: Record<string, React.CSSProperties> = {
    ...styleData,
  };
  const {selctedDetails,draggedItem} = allData
  const {itemIndex1,itemIndex2,itemIndex3} = selctedDetails
  const { text } = data;
  
  const editorConfiguration = {
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'fontSize'],
    fontSize: {
      options: [9, 11, 13, 'default', 17, 19, 21]
    },
    removePlugins: ['dropoff'] // Remove the 'easyimage' plugin
  };
  
  return (
    <div className='contentDiv' style={combinedStyles["Box5"]}>
      <CKEditor
        config={editorConfiguration}
        editor={ClassicEditor}
        data={text}
        onChange={(event: any, editor: any) => {
          const updatedData = editor.getData();
          const updatedDraggedItem = { ...draggedItem };
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
