import React, { useEffect, useState } from 'react';
import { Cluster } from '../../../../types'
import { v4 as uuidv4 } from 'uuid';
import allMetrics, { grafanaIFrameGenerator } from '../../../../metrics';
import Panel from '../Panel';
import { useDrop } from 'react-dnd';

interface KubeStateMetricsProps {
  currCluster: Cluster;
  kubeStateDashboard: React.ReactElement[]
  setKubeStateDashboard: (arg: any) => void
  updateDashboard: (item: number, hoverIndex: number, name: string) => void
}


const KubeStateMetrics = ({currCluster, kubeStateDashboard, setKubeStateDashboard, updateDashboard}: KubeStateMetricsProps) => {
  
  const searchBy: string = 'kubeStateMetrics'
  
  const [ { isOver }, dropRef ] = useDrop({
    accept: 'index',
    drop: (item: any, monitor) => {
      const { i, grafanaPanelUrl } = item
      const hoverIndex = kubeStateDashboard.findIndex((i) => i === monitor.getItem().index)
      updateDashboard(i, hoverIndex, searchBy)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })

  useEffect(() => {
    const newDashboard: React.ReactElement[] = []
    // iterate over metrics by specific dashboard component
    for (const metric in allMetrics[searchBy]) {
      let i = 0
      // generate url 
      const url: string = grafanaIFrameGenerator(currCluster, metric, searchBy)
      // console.log('url', url)
      // add Panel component
      newDashboard.push(<Panel key={uuidv4()} i={i++} grafanaPanelUrl={ url } />)
    }
    setKubeStateDashboard(newDashboard)
  }, [])

  
  return (
    <>
      <div ref={ dropRef } className='dashboard-container'>
        {kubeStateDashboard}
      </div>
    </>
  )
}


export default KubeStateMetrics