
import React,{ useState } from 'react';

// import {
//   BrowserRouter as Router,
// Routes,
// Route
// } from "react-router-dom";

import './App.css';
// import Alert from './components/Alert';

// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {

  //color
  const [radio,setRadio]=useState("red");
  // function toggleColor(){
  //   setColor("green");
  // }

   // Alert
   const [alert, setAlert]=useState(null);
   function showAlert(message,type){
     setAlert({
       msg:message,
       type:type
     });
     setTimeout(() => {
       setAlert(null);
     }, 1500);
   }
  //Mode
  const [mode, setMode] = useState("light");
  function toggleMode(){
    console.log(mode);
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode enabled","success");
    } 
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode enabled","success");
    } 
  }
 
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} radio={radio}/>
      {/* <Alert alert={alert}/> */}
      {/* <Routes> */}
        {/* <Route path="/" element={ */}
        <div className="container my-3">
            <TextForm heading="Enter Text to analyze below" mode={mode} showAlert={showAlert}/>
          </div>
          {/* } /> */}
        {/* <Route path="/about" element={<About />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
