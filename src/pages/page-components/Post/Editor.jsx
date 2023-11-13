import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



function App() {
  const [content, setContent] = useState('');

  return (
    <div className="App">
      <CKEditor
        editor={ ClassicEditor }
        data="<p></p>"
        onReady={ editor => {
          console.log('Editor is ready to use!', editor);
        } }
        onChange={ (event, editor) => {
          const data = editor.getData();
          setContent(data);
          console.log({ event, editor, data });
        } }
        onBlur={ (event, editor) => {
          console.log('Blur.', editor);
        } }
        onFocus={ (event, editor) => {
          console.log('Focus.', editor);
        } }
      />
      <div>
      </div>
    </div>
  );
}

export default App;