import React, {useState, createContext, useEffect, useContext} from 'react';
import { Route, Routes, useNavigate} from "react-router-dom";
import LoginPage from './LoginPage';
import MainPage from './MainPage';

export const Context = createContext('');


//useState for signedIn


const App = () => {
    const [loggedIn, setLoggedIn] = useState('true');
    const navigate = useNavigate();
    useEffect(()=>{
    if (loggedIn === 'true'){
        navigate('/mainPage');
    }
    else{
        navigate('/login');
    }
}, [loggedIn, navigate])
    //wrap routes in Context.Provider value ={loggedIn, setLoggedIn}
    return (
        <Context.Provider value={loggedIn}>
        <Routes>
            <Route path='/login' element={<LoginPage/>} caseSensitive={true} />
            <Route path='/mainPage' element={<MainPage/>} caseSensitive={true}/>
        </Routes>
        </Context.Provider>
    )
}
  
export default App;

