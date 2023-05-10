import React, {useState, createContext, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Routes, redirect, useNavigate} from "react-router-dom";
import LoginPage from './LoginPage';
import MainPage from './MainPage';

export const Context = createContext('');
const navigate = useNavigate();

//useState for signedIn
const [loggedIn, setLoggedIn] = useState('false');

useEffect(()=>{
    if (loggedIn === 'true'){
        navigate('/mainPage');
    }
    else{
        navigate('/login');
    }
}, [])

const App = () => {
    //wrap routes in Context.Provider value ={loggedIn, setLoggedIn}
    return (
        <div>App is loading</div>
        // <Context.Provider value={loggedIn}>
        // <Routes>
        //     <Route path='/login' element={<LoginPage/>} caseSensitive={true} />
        //     <Route path='/mainPage' element={<MainPage/>} caseSensitive={true}/>
        // </Routes>
        // </Context.Provider>
    )
}
  
export default App;

