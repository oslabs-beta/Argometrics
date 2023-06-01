import React, { useEffect, useState } from 'react';
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
  const [ apiDashboard, setApiDashboard ] = useState<React.ReactElement[]>([])
  const [ kubePromDashboard, setKubePromDashboard ] = useState<React.ReactElement[]>([])
  const [ kubeStateDashboard, setKubeStateDashboard ] = useState<React.ReactElement[]>([])
  const [ nodeDashboard, setNodeDashboard ] = useState<React.ReactElement[]>([])
  

  const updateDashboard = (item: number, hoverIndex: number, searchBy: string) => {
    // find panel in dashboard state and update position
    switch (searchBy) {
      case 'apiServer': {
        const moveItem = apiDashboard[item]
        if (moveItem) {
          setApiDashboard((prevState: any) => {
            const copy = [...prevState]
            copy.splice(item, 1)
            copy.splice(hoverIndex, 0, moveItem)
            return copy
          })
        }
        break
      }
      case 'kubePrometheus': {
        const moveItem = kubePromDashboard[item]
        if (moveItem) {
          setKubePromDashboard((prevState: any) => {
            const copy = [...prevState]
            copy.splice(item, 1)
            copy.splice(hoverIndex, 0, moveItem)
            return copy
          })
        }
        break
      }
      case 'kubeStateMetrics': {
        const moveItem = kubeStateDashboard[item]
        if (moveItem) {
          setKubeStateDashboard((prevState: any) => {
            const copy = [...prevState]
            copy.splice(item, 1)
            copy.splice(hoverIndex, 0, moveItem)
            return copy
          })
        }
        break
      }
      case 'nodeExporter': {
        const moveItem = nodeDashboard[item]
        if (moveItem) {
          setNodeDashboard((prevState: any) => {
            const copy = [...prevState]
            copy.splice(item, 1)
            copy.splice(hoverIndex, 0, moveItem)
            return copy
          })
        }
        break
      }
      default: 
        console.log('Dashboard does not exist')
    }
  }

  return(
    <>
      <div id='dashboard-container'>
        <h1 id='dashboard-name'>{toggleDashboard === "dash"? "": toggleDashboard} Dashboard</h1>
        {
          toggleDashboard === 'apiServer' ? <ApiServer currCluster={ currCluster } apiDashboard={ apiDashboard } setApiDashboard={ setApiDashboard } updateDashboard={ updateDashboard } /> :
          toggleDashboard === 'kubePrometheus' ? <KubePrometheus currCluster={ currCluster } kubePromDashboard={ kubePromDashboard } setKubePromDashboard={ setKubePromDashboard } updateDashboard={ updateDashboard } /> :
          toggleDashboard === 'kubeStateMetrics' ? <KubeStateMetrics currCluster={ currCluster } kubeStateDashboard={ kubeStateDashboard } setKubeStateDashboard={ setKubeStateDashboard } updateDashboard={ updateDashboard } /> :
          toggleDashboard === 'nodeExporter' ? <NodeExporter currCluster={ currCluster } nodeDashboard={ nodeDashboard } setNodeDashboard={ setNodeDashboard } updateDashboard={ updateDashboard } /> :
          toggleDashboard === 'keda' ? <NodeExporter currCluster={ currCluster } nodeDashboard={ nodeDashboard } setNodeDashboard={ setNodeDashboard } updateDashboard={ updateDashboard } /> :
          null
        }
      </div>
    </>
  )
}

export default Dashboard;