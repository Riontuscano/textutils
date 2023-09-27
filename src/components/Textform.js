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
  // setText()
  return (
    <>
    {/* <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">{props.email}</label>
    <input type="email" className="form-control" id="exampleInputEmail1" onChange={handleOnChange} aria-describedby="emailHelp" value={text}/ >
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
    <div className="container my-5"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Enter Text</h1>
    <textarea className="form-control" onChange={handleOnChange} style={{background:props.mode==='dark'?'grey':'white'}} id="exampleFormControlTextarea1" value={text} rows="9"></textarea>
    </div>
  <button  className="btn btn-primary mx-1" onClick={handleupclick} >UppeCase</button>
  <button  className="btn btn-primary mx-1" onClick={handlelowclick} >LowerCase</button>
  <button  className="btn btn-primary mx-1" onClick={speak} >To read aloud</button>
  <button  className="btn btn-primary" onClick={clear} >Clear</button>
    <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}} >
    <h2>Your Text Summary</h2>
    <p>Character={text.length} words={(text.split(" ").length)-1}</p>
    <p>Time required to read this text={0.008 * (text.split(" ").length-1)} min</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something to start"}</p>
    </div>

  </>
  )
}
