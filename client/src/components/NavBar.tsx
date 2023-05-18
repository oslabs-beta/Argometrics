import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { config } from '@react-spring/web';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/NavBar.scss'
interface NavBarProps {
  toggleDashboard: string;
  setToggleDashboard: React.Dispatch<React.SetStateAction<string>>

}

const NavBar = ({toggleDashboard, setToggleDashboard}: NavBarProps)=>{

  const buttonAnimation = useSpring({
    transform: 'translateY(0)', // Starting position
    from: { transform: 'translateY(300px)' }, // Initial position
    config: config.molasses,
  });
  useEffect( () => {
    console.log(toggleDashboard)
  }, [toggleDashboard])

  let dropDown;
  const dashOptions = ['dash', 'apiServer', 'kubeStateMetric', 'prometheusExporter', 'kubePrometheus', 'nodeExporter'];
      if (dashOptions.includes(toggleDashboard)){
          dropDown = [
              <>
               <button key={uuidv4()} className={toggleDashboard === 'apiServer' ? "active" : "dash-buttons"} id='apiDash' onClick={()=> setToggleDashboard('apiServer')}>API Dashboard</button>
               <button key={uuidv4()} className={toggleDashboard === 'kubeStateMetric' ? "active" : "dash-buttons"} id='metricDash' onClick={()=> setToggleDashboard('kubeStateMetric')}>Kubernetes Metric Dashboard</button>
               <button key={uuidv4()} className={toggleDashboard === 'nodeExporter' ? "active" : "dash-buttons"} id='nodeDash' onClick={()=> setToggleDashboard('nodeExporter')}>Node Exporter</button>
               <button key={uuidv4()} className={toggleDashboard === 'kubePrometheus' ? "active" : "dash-buttons"} id='kubePromDash' onClick={()=> setToggleDashboard('kubePrometheus')}>Kube Prometheus Dashboard</button>
               </>
          ]
      } 
  return (
    <>
      <div key={uuidv4()} id="button-container">
        <animated.button key={uuidv4()} id='homeButton' style={buttonAnimation}  className={toggleDashboard === 'home' ?  'active': ''} onClick={()=>{setToggleDashboard('home')}}>Home</animated.button>
        <animated.button key={uuidv4()} id="dash" style={buttonAnimation} className={toggleDashboard === 'home' ? '' : 'active'} onClick={()=>{setToggleDashboard('dash')}}>Dashboard</animated.button>
         {dropDown}
      </div>
    </>
  )
}

export default NavBar;