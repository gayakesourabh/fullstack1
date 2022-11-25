import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Allemployees from './components/Allemployees';
import Addemployee from './components/Addemployee';
import Alert1 from './components/Alert1';
import Updateemployee from './components/Updateemployee';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (msg) =>{
    setAlert({
      message:msg
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500)
}


  return (
    <>
      <BrowserRouter>

        <Navbar />

        <div style={{marginTop:'58px'}}><Alert1 alert={alert}/></div>
  
        <Routes>
          <Route path="/" element={<Allemployees showAlert={showAlert}/>} />
          <Route path="addemployee" element={<Addemployee showAlert={showAlert}/>} />
          <Route path="updateemployee/:id" element={<Updateemployee showAlert={showAlert}/>} />
        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
