import React, {useState, useContext, useEffect, MouseEvent} from 'react';
import Dashboard from './Dashboard';
import Home from './Home';
import '../stylesheets/MainPage.scss'

const MainPage = () => {
   const [toggleDashboard, setToggleDashboard] = useState(false);
        let mainComponent;
            if (toggleDashboard){
                mainComponent = <Dashboard/>
            } 
            else {
                mainComponent = <Home/>
            }

            useEffect(() => {
              console.log(toggleDashboard);
          }, [toggleDashboard]);
        
    return (
     <div id='main-page-container'>
        <div id="cluster-container">clusters go here!</div>
        <div id="button-container">
            <button id='homeButton' onClick={()=>{setToggleDashboard(false)}}>Home</button>
            <button onClick={()=>{setToggleDashboard(true)}}>Dashboard</button>
        </div>
        <div id="main-container">
            {mainComponent}
        </div>
        <div id='darkModeButton'>
            <button>Toggle Dark Mode</button>
        </div>
     </div>
    )
}

export default MainPage;
