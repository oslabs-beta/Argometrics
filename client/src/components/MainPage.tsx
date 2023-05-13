import React, {useState, useContext, useEffect, MouseEvent} from 'react';
import Dashboard from './Dashboard';
import { useSpring, animated } from 'react-spring';
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

          let buttons = []
          for(let i = 0; i < 10; i++){
            buttons.push(<button className='cluster-buttons'></button>)

            const buttonAnimation = useSpring({
                transform: 'translateY(0)', // Starting position
                from: { transform: 'translateY(3000px)' }, // Initial position
              });
          }
        
    return (
     <div id='main-page-container'>
        <div id="cluster-container">
            <h3>Cluster View</h3>
            {buttons}
        </div>
            <div id="button-container">
                <button id='homeButton' className={toggleDashboard ? '' : 'active'} onClick={()=>{setToggleDashboard(false)}}>Home</button>
                <button className={toggleDashboard ? 'active' : ''} onClick={()=>{setToggleDashboard(true)}}>Dashboard</button>
            </div>
                <div id="main-container">
                    {mainComponent}
                </div> 
                {/* <button id="darkModeButton">Toggle Dark Mode</button> */}
                
    </div>
    )
}

export default MainPage;
