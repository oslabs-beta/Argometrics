import React, {useState, useContext, useEffect, MouseEvent} from 'react';
import Dashboard from './Dashboard';
import { useSpring, animated } from 'react-spring';
import { config } from '@react-spring/web';
import Home from './Home';
import '../stylesheets/MainPage.scss';
import { Cluster, DashboardUIds } from '../../../types';
interface MainPageProps {
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>
  }

const MainPage = ({userId, setUserId}: MainPageProps) => {
  const defaultDashboard: DashboardUIds = {
    apiServer: {
        dashboardUIDKey: '',
        grafanaLinkDText: ''
      },
      kubeStateMetric: {
        dashboardUIDKey: '',
        grafanaLinkDText: ''
      },
      kubePrometheus: {
        dashboardUIDKey:'',
        grafanaLinkDText: ''
      },
      nodeExporter: {
        dashboardUIDKey: '',
        grafanaLinkDText: ''
      }
    }
  const defaultCluster: Cluster = {
    userId: userId,
    clusterName: '',
    url: '',
    dashboards: defaultDashboard
  };

  // hook to set the cluster you are working on
    // clicking on a different cluster should call setCluster
  const [cluster, setCluster] = useState<Cluster>(defaultCluster);
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
                     <button className="dash-buttons" id='apiDash' onClick={()=> setToggleDashboard('apiServer')}>API Dashboard</button>
                     <button className="dash-buttons" id='metricDash' onClick={()=> setToggleDashboard('kubeStateMetric')}>Kubernetes Metric Dashboard</button>
                     <button className="dash-buttons" id='nodeDash' onClick={()=> setToggleDashboard('nodeExporter')}>Node Exporter</button>
                     <button className="dash-buttons" id='kubePromDash' onClick={()=> setToggleDashboard('kubePrometheus')}>Kube Prometheus Dashboard</button>
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
                <animated.button id='homeButton' style={buttonAnimation}  className={toggleDashboard === 'home' ?  'active': ''} onClick={()=>{setToggleDashboard('home')}}>Home</animated.button>
                <animated.button id="dash" style={buttonAnimation} className={toggleDashboard === 'home' ? '' : 'active'} onClick={()=>{setToggleDashboard('dash')}}>Dashboard</animated.button>
                {dropDown}
            </div>
                <div id="main-container">
                    {mainComponent}
                </div> 
                {/* <button id="darkModeButton">Toggle Dark Mode</button> */}
                
    </div>
    )
}

export default MainPage;
