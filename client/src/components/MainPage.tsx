import React, {useState, useContext, useEffect, MouseEvent} from 'react';
import Dashboard from './Dashboard';
import { useSpring, animated } from 'react-spring';
import { config } from '@react-spring/web';
import Home from './Home';
import '../stylesheets/MainPage.scss';
import { Cluster } from '../../../types';
interface MainPageProps {
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>
  }

const MainPage = ({userId, setUserId}: MainPageProps) => {
  // hook to set the cluster you are working on
    // clicking on a different cluster should call setCluster
  const [cluster, setCluster] = useState<Cluster>();
  const [clustersFetched, setClustersFetched] = useState<boolean>(false)

  // thinking we make 4 dashboard toggles
     // one for each db 
  const [toggleDashboard, setToggleDashboard] = useState<string>('home');
//   const [toggleApiDashboard, setToggleApiDashboard] = useState(false);
//   const [toggleMetricDashboard, setToggleMetricDashboard] = useState(false);
//   const [togglePrometheusDashboard, setTogglePrometheusDashboard] = useState(false);
//   const [toggleNodeDashboard, setToggleNodeDashboard] = useState(false);

  // displays editCluster
  const [showEditCluster, setShowEditCluster] = useState(false)
  
        let mainComponent = <Home userId = {userId} cluster = {cluster} setCluster = {setCluster}/>;
        let dropDown;
        const dashOptions = ['dash', 'apiServer', 'kubeStateMetric', 'prometheusExporter', 'kubePrometheus', 'nodeExporter'];
            if (dashOptions.includes(toggleDashboard)){
                dropDown = [
                    <>
                     <button style={{height: '20px'}} id='apiDash' onClick={()=> setToggleDashboard('apiServer')}>API Dashboard</button>
                     <button style={{height: '20px'}} id='metricDash' onClick={()=> setToggleDashboard('kubeStateMetric')}>Kubernetes Metric Dashboard</button>
                     <button style={{height: '20px'}} id='nodeDash' onClick={()=> setToggleDashboard('nodeExporter')}>Node Exporter</button>
                     <button style={{height: '20px'}} id='kubePromDash' onClick={()=> setToggleDashboard('kubePrometheus')}>Kube Prometheus Dashboard</button>
                     </>
                ]
            } 
            if (toggleDashboard === 'home'){
                mainComponent = <Home userId = {userId} cluster = {cluster} setCluster = {setCluster}/>;
                
            }
            else {

                mainComponent = <Dashboard userId = {userId} cluster = {cluster} toggleDashboard = {toggleDashboard} />;
                
            }

            
        

            useEffect(() => {
              console.log(toggleDashboard);
          }, [toggleDashboard]);

          let buttons = []
          for(let i = 0; i < 10; i++){
            buttons.push(<button className='cluster-buttons'></button>)

          }
          const buttonAnimation = useSpring({
            transform: 'translateY(0)', // Starting position
            from: { transform: 'translateY(300px)' }, // Initial position
            config: config.molasses,
          });
          
        
    return (
     <div id='main-page-container'>
        <div id="cluster-container">
            <h3>Cluster View</h3>
            {buttons}
        </div>
            <div id="button-container">
                <animated.button style={buttonAnimation} id='homeButton' className={toggleDashboard === 'home' ?  'active': ''} onClick={()=>{setToggleDashboard('home')}}>Home</animated.button>
                <animated.button style={buttonAnimation} className={toggleDashboard === 'home' ? '' : 'active'} onClick={()=>{setToggleDashboard('dash')}}>Dashboard</animated.button>
                <div id='dropDown'>{dropDown}</div>
            </div>
                <div id="main-container">
                    {mainComponent}
                </div> 
                {/* <button id="darkModeButton">Toggle Dark Mode</button> */}
                
    </div>
    )
}

export default MainPage;
