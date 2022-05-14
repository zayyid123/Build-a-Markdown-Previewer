import React from 'react'
import './App.css'
import { marked } from 'marked'

const App = () => {
  marked.setOptions({
    breaks: true
  })
  const placeholder = `# Welcome to my React Markdown Previewer !
## 🤷‍♂️ What can you write here :
1. Code
  *  \`<div></div>\` 
  *  \`\`\`
  // this is multi-line code:
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\` 
* \`\`\` bash
  npm install 
  \`\`\`
2. Blockquote
	* eg: 
> Blockquote
3. Different Text Style
  * **Bold**
  * *Italic*
  * ~~Strikethrough~~
4. Links [Click Here](https://github.com/vanisingh-24)
  
5. Tables
    | Name          | Age           | Salary|
    | ------------- |:-------------:| -----:|
    | Steve        | 32           | $160000|
    | Peter         | 24            |$120000|
    | Tony        | 37           | $150000 |
6. Images
  
    ![React](https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/412/square_256/AccessibleReact_1000.png)
## 🛸 Technologies Used
*  React.js
*  SCSS
*  Javascript
`;
  const [content, setcontent] = React.useState(placeholder)
  
  const handleChange = (e) => {
    const value = e.target.value;
    setcontent(value)
  }

  React.useEffect(() => {
    const myContent = document.getElementById('preview');
    myContent.innerHTML = marked.parse(content)
  }, [content])
  

  return (
    <div>
      <div className='editorWrap'>
        <div className='tolBar'>
          <h3>Editor</h3>
        </div>
        <textarea id='editor' onChange={handleChange} type='text'>
          {
            content
          }
        </textarea>
      </div>

      <div className='previewWrap'>
        <div className='tolBar'>
          <h3>Preview</h3>
        </div>
        <div id='preview' >
        </div>
      </div>
    </div>
  )
}

export default App