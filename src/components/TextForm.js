import React,{useState} from 'react'


export default function TextForm(props) {

  // function wordCount(input){
  //   newInput=input.split(" ");
  //     let i=0;
  //     for(i=0;i<new.length;i++){
  //       if(input[i][0].ch)
  //     }
  // }

  const [text,setText]=useState("Enter text here");

  function handleUpClick(){
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase","success");
  }
  function handleLoClick(){
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase","success");
  }
  function handleClearClick(){
    let newText="";
    setText(newText);
    props.showAlert("Text cleared","success");
  }
  function handleHeadingClick(){
    const newText=text.split(" ");
    for(let i=0;i<newText.length;i++){
      newText[i]=newText[i][0].toUpperCase()+newText[i].substring(1);
    }
    setText(newText.join(" "));
    props.showAlert("Text converted to Heading","success");
  }
  function handleOnChange(event){
    setText(event.target.value);
  }
  
  return (
    <>
    <div className='container'>
        <h1 style={{color:props.mode==="dark"?"white":"black"}}>{props.heading}</h1>
        <div className="form-group" >
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==="dark"?"#bfc0c1":"white", color:props.mode==="dark"?"primary":"black"}}></textarea>
          <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-primary my-3 mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
          <button className='btn btn-primary my-3' onClick={handleClearClick}>Clear</button>
          <button className='btn btn-primary my-3 mx-2' onClick={handleHeadingClick}>Make Heading</button>
        </div>
      </div>
      <div className='container my-2'style={{color:props.mode==="dark"?"white":"black"}}>
        
      <h1>Your text Summary</h1>
        <div className='mx-3'>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length} Minutes read</p>
        </div>
        <h1>Preview</h1>
        <div style={{color:props.mode==="dark"?"white":"black"}} className='mx-3'>
          <p>{text}</p>
        </div>
      </div>
      
    </>
      
  )
}
