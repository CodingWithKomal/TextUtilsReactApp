/**useState- hooks */
/**hooks let you use the feature of class without using functions */
import React,{useState} from 'react'

/*text my variable , setText-function  useState=default value*/




export default function TextForm(props) {


  const handleOnChange=(event)=>{ 
    console.log("Handle on change");
    setText(event.target.value); //onchange we are adding newly enterd value to previous value
  }
  
  const handleUpClick =()=>{
    setText(text.toUpperCase());
    props.showAlert("converted to upper case","success")

   console.log("Uppercase was clicked");
  }
  
  const handleLowerClick =()=>{
    setText(text.toLocaleLowerCase());
    
   props.showAlert("converted to lower case","success")

   console.log("Uppercase was clicked");
  }
  
   const clearText=()=>{
    setText("");
    props.showAlert("Text cleared","success")

   }

   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleCopy=()=>{
  
    navigator.clipboard.writeText(text);
    props.showAlert("copied text","success")

  }

  const handleExtraSpace=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed","success")

  }



  const [text,setText] =useState("");
  /*txt="wrong way to set the text" */
  //correct way setText("new txt")
  return (
    <>
    
    <div className="container my-3
    "  style={{color:props.mode=='dark'?'white':'black'}}>
             <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" 
            style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}}
            ></textarea>
            </div>
            <button className="btn btn-primary " disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2"  disabled={text.length===0}  onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2"  disabled={text.length===0}  onClick={clearText}>Clear text</button>
            <button className="btn btn-primary mx-2  my-2"  disabled={text.length===0}  onClick={handleCopy}>Copy text</button>
             <button className='btn btn-primary mx-2 my-2'  disabled={text.length===0}  onClick={handleExtraSpace}> Remove Extra Space</button>
             <button  onClick={speak} className="btn btn-warning mx-2 my-2" disabled={text.length===0} >Speak</button>
    <div className="container my-5" style={{color:props.mode=='dark'?'white':'black'}}>
     <h2>Your text summary</h2>
     <p>{text.split(/\s+/).filter((element)=> element.length!=0).length} Worlds and {text.split("").length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=> element.length!=0).length} Minutes to read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </div>
    </>
  )
}
