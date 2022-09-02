import './App.css';
import Darkmode from './components/Darkmode';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  // onclick dark mode

  const modeDark = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showAlert('success', 'dark mode enabled')

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('success', 'light mode enabled')


    }
  }
  // alert concepts
  const [alert, setAlert] = useState(null);
  // showalert arrow function

  const showAlert = (type, message) => {
    setAlert({
      mesg1: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="Rectjs" link="About us" mode={mode} modeDark={modeDark} />
        <Alert alert={alert} />
        <div className='container my-3'>
          {/* <Routes> */}
            {/* <Route exact path="about" element={<About />} /> */}
            {/* <Route exact path="home" element={<Textform heading="Enter the text" mode={mode} />} />
          </Routes> */}
          <Textform heading="Enter the text" mode={mode} />
        </div>
      {/* </Router> */}
      <Darkmode mode={mode} />
    </>
  );
}
export default App;
