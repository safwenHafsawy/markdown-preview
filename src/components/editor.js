import React, {Component} from 'react';
import Preview from './preview';

const DEFAULT_CONTENT = `# Welcome to React Markdown Previewer!

 ## This is a sub-heading...
 ### And here's some other cool stuff:
 
 Heres some code, \`<div></div>\`, between 2 backticks.
 
 \`\`\`
 // this is multi-line code:
 
 function anotherExample(firstLine, lastLine) {
   if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
     return multiLineCode;
   }
 }
 \`\`\`
 
 You can also make text **bold**... whoa!
 Or _italic_.
 Or... wait for it... **_both!_**
 And feel free to go crazy ~~crossing stuff out~~.
 
 There's also [links](https://www.freecodecamp.org), and
 > Block Quotes!
 
 And if you want to get really crazy, even tables:
 
 Wild Header | Crazy Header | Another Header?
 ------------ | ------------- | -------------
 Your content can | be here, and it | can be here....
 And here. | Okay. | I think we get it.
 
 - And of course there are lists.
   - Some are bulleted.
      - With different indentation levels.
         - That look like this.
 
 
 1. And there are numbered lists too.
 1. Use just 1s if you want!
 1. And last but not least, let's not forget embedded images:
 
 this was created as part of a freeCodeCamp challenge
 ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
 `

class Editor extends Component {
    constructor(props){
        super(props);
        this.state = {
            input : DEFAULT_CONTENT
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className= "col-1"></div>
                    <div className= "col-10">
                        <div id="editor">
                            <label id="editor-title">Editor</label>
                            <textarea id="editor-textarea" value={this.state.input} onChange ={this.handleChange}/>
                        </div>
                    </div>
                    <Preview text={this.state.input} />
                </div>
            </div>

        )
    }
}

export default Editor;