import React, {useState, useContext, useEffect, MouseEvent} from 'react';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import ClustersView from './ClustersView'
import { useSpring, animated } from 'react-spring';
import { config } from '@react-spring/web';
import { v4 as uuidv4 } from 'uuid';
import Home from './Home';
import '../stylesheets/MainPage.scss';
import { Cluster, DashboardUIds } from '../../../types';
import { useNavigate } from 'react-router-dom';
interface MainPageProps {
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>
  }

const MainPage = ({userId, setUserId}: MainPageProps) => {

  // default values so type script knows the type of what its taking in
  const defaultDashboard: DashboardUIds = {
    apiServer: {
        dashboardUIDKey: '',
        grafanaLinkDText: ''
      },
      kubeStateMetrics: {
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
  const [cluster, setCluster] = useState<Array<Cluster>>([]);
  const [currCluster, setCurrCluster] = useState<Cluster>(defaultCluster);
  const [clusterFetched, setClusterFetched] = useState<boolean>(false)
  const [toggleDashboard, setToggleDashboard] = useState<string>('home');
  const [showClusterEditor, setShowClusterEditor] = useState<boolean>(false)

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    fetch('api/auth/logout',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userId}) ,
    })
    .then((res)=> res.json())
    .then((res) =>{
        if (res === 'success'){
          navigate('/');
        }
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  // fetch to the backend to get clusters
  useEffect( () => {
    async function fetchCluster(userId: string) {
      const response = await fetch('/api/cluster/get');
      const cluster = await response.json();
      setCluster(cluster);
      console.log('userId', userId)
      // setClusterFetched(true)
    }
    fetchCluster(userId);
  }, [])

  
  let mainComponent = <Home userId={userId} cluster={cluster} setCluster={setCluster} showClusterEditor={showClusterEditor} setShowClusterEditor={setShowClusterEditor} />;
    if (toggleDashboard === 'home'){
      mainComponent = <Home key={uuidv4()} userId={userId} cluster={cluster} setCluster={setCluster} showClusterEditor={showClusterEditor} setShowClusterEditor={setShowClusterEditor} />;
    } else {
      mainComponent = <Dashboard key={uuidv4()} userId={userId} cluster={cluster} currCluster = {currCluster} toggleDashboard={toggleDashboard} setToggleDashboard={setToggleDashboard}/>;
    }

  return (
    <div id='main-page-container'>
      <ClustersView key={uuidv4()} userId = {userId} cluster = {cluster} currCluster = {currCluster} setCurrCluster = {setCurrCluster}/>
      <NavBar className="nav-bar" key={uuidv4()} toggleDashboard = {toggleDashboard} setToggleDashboard = {setToggleDashboard}/>
      <div id="main-container">
        {mainComponent}
        <button id='logout' onClick = {() => handleLogoutClick()}>Log Out</button>
      </div> 
      
      
     
    </div>
    )
}

export default MainPage;
