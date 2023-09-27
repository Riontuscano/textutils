import React, { useState } from 'react';  
// import PropTypes from 'prop-types'

export default function TextFrom(props) {

  const handleupclick =()=>{
    // console.log('Button is clicked value='+text)
    let newText= text.toUpperCase()
    setText(newText)
    props.showAlert("Convert to Upper Case","success")
  }
  const handlelowclick =()=>{
    // console.log('Button is clicked value='+text)
    let newText= text.toLowerCase()
    setText(newText)
    props.showAlert("Convert to Lower Case","success")
  }
  const handleOnChange =(event)=>{
    // console.log('OnChange')
    setText(event.target.value)
  }
  const clear =()=>{
    // console.log('OnChange')
    setText('')
    props.showAlert("Text Clear","success")
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const [text, setText] = useState('');
  
  return (
    <>
    <div className="container my-5"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h3>  Word counter | Character counter| Text Preview | Lowercase to Uppercase | Uppercase to Lowercase | Read Aloud |</h3><br />
    <h2>Try TextUtils </h2>
    <textarea className="form-control" onChange={handleOnChange} style={{background:props.mode==='dark'?'grey':'white',color:props.mode === 'dark' ? 'white' : 'dark'}} id="exampleFormControlTextarea1" value={text} rows="9"></textarea>
    </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleupclick} >UppeCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlelowclick} >LowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={speak} >To read aloud</button>
  <button disabled={text.length===0} className="btn btn-primary" onClick={clear} >Clear</button>
    <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}} >
    <h2>Your Text Summary</h2>
    <p>Character={text.length} words={(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)}</p>
    <p>Time required to read this text={0.008 * (text.split(" ").length-1)} min</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something to start"}</p>
    </div>

  </>
  )
}
