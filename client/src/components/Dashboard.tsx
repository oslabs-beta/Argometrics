import React, { useEffect } from 'react';
import '../stylesheets/Dashboard.scss'
import {Cluster} from '../../../types'
import Panel from './Panel'
import allMetrics, { grafanaIFrameGenerator } from '../../../metrics'
import ApiServer from './dashboard/ApiServer'
import KubePrometheus from './dashboard/KubePrometheus'
import KubeStateMetrics from './dashboard/KubeStateMetrics'
import NodeExporter from './dashboard/NodeExporter'

interface DashboardProps {
  userId: string;
  cluster: Array<Cluster>;
  currCluster: Cluster;
  toggleDashboard: string;
  setToggleDashboard: React.Dispatch<React.SetStateAction<string>>;
}
const Dashboard = ({ userId, cluster, currCluster, toggleDashboard, setToggleDashboard }: DashboardProps) => {
  // if toggleDashboard<string>
  // const currDash = []
  // for (const metric in allMetrics.toggleDashboard) {
  //   // generate a url
  //   const url = grafanaIFrameGenerator(currCluster, metric, toggleDashboard)
  //   currDash.push(<Panel grafanaPanelUrl={url}/>)
  // }
  // set up conditional render of components based on toggleDashboard i.e. nodeExporter, kubeStateMetrics, etc
  // pass necessary state to each component
  

  return(
    <>
      <div id='dashboard-container'>
        <h1 id='dashboard-name'>Dashboard Name</h1>
        {/* {currDash} */}
        {
          toggleDashboard === 'apiServer' ? <ApiServer currCluster={ currCluster } /> :
          toggleDashboard === 'kubePrometheus' ? <KubePrometheus currCluster={ currCluster } /> :
          toggleDashboard === 'KubeStateMetrics' ? <KubeStateMetrics currCluster={ currCluster } /> :
          <NodeExporter currCluster={ currCluster } />
        }
      </div>
    </>
  )
}

export default Dashboard;