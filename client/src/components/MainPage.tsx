import React, {useState, useContext, useEffect, MouseEvent} from 'react';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import ClustersView from './ClustersView'
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

  // default values so type script knows the type of what its taking in
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
  const [cluster, setCluster] = useState(Array<Cluster>);
  const [clusterFetched, setClusterFetched] = useState<boolean>(false)
  const [toggleDashboard, setToggleDashboard] = useState<string>('home');
  const [showClusterEditor, setShowClusterEditor] = useState<boolean>(false)

  // fetch to the backend to get clusters
  useEffect( () => {
    async function fetchCluster(userId: string) {
      const response = await fetch('/api/cluster/get')
      const cluster = await response.json()
      setCluster(cluster)
      console.log('fetched clusters on main page', cluster)
      // setClusterFetched(true)
    }
    fetchCluster(userId);
  }, [])
  
  

  
  let mainComponent = <Home userId={userId} cluster={cluster} setCluster={setCluster} showClusterEditor={showClusterEditor} setShowClusterEditor={setShowClusterEditor} />;
    if (toggleDashboard === 'home'){
      mainComponent = <Home userId={userId} cluster={cluster} setCluster={setCluster} showClusterEditor={showClusterEditor} setShowClusterEditor={setShowClusterEditor} />;
    } else {
      mainComponent = <Dashboard userId={userId} cluster={cluster} toggleDashboard={toggleDashboard} setToggleDashboard= {setToggleDashboard}/>;
    }

  return (
    <div id='main-page-container'>
      <ClustersView userId = {userId} cluster = {cluster} setCluster = {setCluster}/>
        <NavBar toggleDashboard = {toggleDashboard} setToggleDashboard = {setToggleDashboard}/>
          <div id="main-container">
          {mainComponent}
          </div> 
    </div>
    )
}

export default MainPage;
