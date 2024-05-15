
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{useState} from 'react'
import Alert from './Components/Alert';
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom"


function App() {
  const[mode,setDarkMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const toggleMode=()=>{
    if(mode==='light')
      {
        setDarkMode('dark');
        document.body.style.background='#042743';
        showAlert("Dark Mode enabled","success");
      }
      else
      {
        setDarkMode('light');
        document.body.style.background='white';
        showAlert("light Mode enabled","success");
      }
    
  }
const showAlert=(message,type)=>{
   setAlert({
     msg:message,
     type:type
   })

   setTimeout(() => {
       setAlert(null);
   }, 1500);
}

  return (
  <>
  <Router>
  <div>   
  <Navbar title="TextUtils" abouttext="About" mode={mode}  toggleMode={toggleMode} ></Navbar>
   <Alert alert={alert}></Alert>
   <Routes>
   <Route exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>

     <Route exact path="/about" element={<About/>}>
     </Route>
   </Routes>
  </div> 
  </Router>
  </>
  );
}
export default App;
