import React, {useState, createContext, useEffect, useContext} from 'react';
import { Route, Routes, useNavigate} from "react-router-dom";
import LoginPage from './LoginPage';
import MainPage from './MainPage';


  
const App = () => {
    
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path='/login' element={<LoginPage/>} caseSensitive={true} />
            <Route path='/mainPage' element={<MainPage/>} caseSensitive={true}/>
        </Routes>
    )
}
  
export default App;

