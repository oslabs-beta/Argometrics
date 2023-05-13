import React from 'react';
import '../stylesheets/Dashboard.scss'
const Dashboard = () => {
  return(
    <div>
      <div id='dashboard-container'>
        <iframe src="http://localhost:3000/d-solo/e2b85478-a60a-4c29-be54-8d4ed0d950b2/prometheus?orgId=1&from=now-1h&to=now&theme=light&panelId=1" width="450" height="200"></iframe>
      </div>
    </div>
  )
}

export default Dashboard;