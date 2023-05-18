import React, { useEffect, useState } from 'react';
import { Cluster } from '../../../../types'
import { v4 as uuidv4 } from 'uuid';
import allMetrics, { grafanaIFrameGenerator } from '../../../../metrics';
import Panel from '../Panel';

interface KubeStateMetricsProps {
  currCluster: Cluster;
}


const KubeStateMetrics = ({currCluster}: KubeStateMetricsProps) => {
  const [ dashboard, setDashboard ] = useState<React.ReactElement[]>([])
  const searchBy: string = 'kubeStateMetrics'
  // console.log('currCluster', currCluster)
  useEffect(() => {
    const newDashboard: React.ReactElement[] = []
    // iterate over metrics by specific dashboard component
    for (const metric in allMetrics[searchBy]) {
      // generate url 
      const url: string = grafanaIFrameGenerator(currCluster, metric, searchBy)
      // console.log('url', url)
      // add Panel component
      newDashboard.push(<Panel key={uuidv4()} grafanaPanelUrl={ url } />)
    }
    setDashboard(newDashboard)
  }, [])

  
  return (
    <>
      <div className='dashboard-container'>
        {dashboard}
      </div>
    </>
  )
}


export default KubeStateMetrics