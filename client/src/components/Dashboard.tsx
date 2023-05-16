import React from 'react';
import '../stylesheets/Dashboard.scss'
import {Cluster} from '../../../types'
interface DashboardProps {
  userId: string;
  cluster: Cluster;
  toggleDashboard: string
}
const Dashboard = ({ userId, cluster, toggleDashboard }: DashboardProps) => {
  // going to prop drill our cluster
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