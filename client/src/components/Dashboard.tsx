import React from 'react';
import '../stylesheets/Dashboard.scss'
import {Cluster} from '../../../types'

interface DashboardProps {
  userId: string;
  cluster: Array<Cluster>;
  toggleDashboard: string
  setToggleDashboard: React.Dispatch<React.SetStateAction<string>>
}
const Dashboard = ({ userId, cluster, toggleDashboard, setToggleDashboard }: DashboardProps) => {
  // if toggleDashboard<string>

  // set up conditional render of components based on toggleDashboard i.e. nodeExporter, kubeStateMetrics, etc
    // pass necessary state to each component
  

  return(
    <div>
      <div id='dashboard-container'>
        <h1 id='dashboard-name'>Dashboard Name</h1>
        <iframe src="http://localhost:3000/d-solo/e2b85478-a60a-4c29-be54-8d4ed0d950b2/promhttprequests?orgId=1&from=now-1h&to=now&theme=dark&panelId=1" width="450" height="200" ></iframe>
      </div>
    </div>
  )
}

export default Dashboard;