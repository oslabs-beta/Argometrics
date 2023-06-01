import React, {useState, createContext, useEffect, useContext} from 'react';
import { Route, Routes, useNavigate} from "react-router-dom";
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Logo from './Logo'

//needs logic to check if current session and redirect to main page if session is active
  
const App = () => {
    
    const navigate = useNavigate();
    const [userId, setUserId] = useState<string>('');

    return (
        <DndProvider backend={ HTML5Backend }>
            <Routes>
                <Route path='/' element={<Logo userId={userId} setUserId={setUserId} />} />
                {/* <Route path='/' element={<LoginPage userId={userId} setUserId={setUserId}/>} caseSensitive={true} /> */}
                <Route path='/mainPage' element={<MainPage userId={userId} setUserId={setUserId}/>} caseSensitive={true}/>
            </Routes>
        </DndProvider>
    )
}
  
export default App;

