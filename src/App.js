 import React, { useState } from 'react';  
// import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Textform from'./components/Textform';
import Alert from'./components/Alert'; 
import Aboutme from'./components/Aboutme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      tp:type
    });
  }
   setTimeout(() => {
    setAlert(null);
  },4000);
  // setInterval(() => {
  //   document.title="TextUtils is a Amazing Website"
  // },(5000));
  // setInterval(() => {
  //   document.title="TextUtils-Word counter | Character counter| Text Preview | Lowercase to Uppercase | Uppercase to Lowercase | Read Aloud |"
  // },(1500));

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#001121';
      showAlert("Dark mode is enabled","success");
      // document.title="TextUtils-Darkmode"
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';    
      showAlert("Light mode is enabled","success");
      // document.title="TextUtils-LightMode"
  }
}
  return (
    <>
      {/* <BrowserRouter> */}
           <Router>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} state="active"/ >
    {/* <Navbar mode={mode} toggleMode={toggleMode} state="active"/ > */}
      <Alert alert={alert}/>
    <div className="container my-3"> 
          <Routes>
          <Route path="/Aboutme" element={<Aboutme mode={mode} toggleMode={toggleMode}/>}/>
          <Route path="/" element={ <Textform email="Email" showAlert={showAlert}  mode={mode}/>}/>
        </Routes>
    </div>
    </Router>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;