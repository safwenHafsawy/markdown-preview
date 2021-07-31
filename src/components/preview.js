import React from 'react';
import marked from 'marked';

const Preview = (props) =>{
   return (
       <div id = "preview">
           <label id="previw-title">Preview</label>
            <div id = "preview-display" dangerouslySetInnerHTML={{__html:marked(props.text)}} />
       </div>
   )
}
export default Preview