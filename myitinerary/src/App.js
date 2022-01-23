import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Cities from './Pages/Cities';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cities' element={<Cities/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>

       

        

        </Routes>   
      
        <Footer/>       
      
      </BrowserRouter>
      
    </div>
  );   
}

export default App;
