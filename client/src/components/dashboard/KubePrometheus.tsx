import React, { useEffect, useState } from 'react';
import { Cluster } from '../../../../types'
import { v4 as uuidv4 } from 'uuid';
import allMetrics, { grafanaIFrameGenerator } from '../../../../metrics';
import Panel from '../Panel';
import { useDrop } from 'react-dnd';

interface KubePrometheusProps {
  currCluster: Cluster;
  kubePromDashboard: React.ReactElement[]
  setKubePromDashboard: (arg: any) => void
  updateDashboard: (item: number, hoverIndex: number, name: string) => void
}

const KubePrometheus = ({currCluster, kubePromDashboard, setKubePromDashboard, updateDashboard}: KubePrometheusProps) => {
  
  const searchBy: string = 'kubePrometheus'

  const [ { isOver }, dropRef ] = useDrop({
    accept: 'index',
    drop: (item: any, monitor) => {
      const { i, grafanaPanelUrl } = item
      const hoverIndex = kubePromDashboard.findIndex((i) => i === monitor.getItem().index)
      updateDashboard(i, hoverIndex, searchBy)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })
  
  useEffect(() => {
    const newDashboard: React.ReactElement[] = []
    let i = 0
    // iterate over metrics by specific dashboard component
    for (const metric in allMetrics[searchBy]) {
      // generate url 
      const url: string = grafanaIFrameGenerator(currCluster, metric, searchBy)
      // console.log('url', url)
      // add Panel component
      newDashboard.push(<Panel key={uuidv4()} i={i++} grafanaPanelUrl={ url } />)
    }
    setKubePromDashboard(newDashboard)
  }, [])

  
  return (
    <>
      <div ref={ dropRef } className='dashboard-container'>
        {kubePromDashboard}
      </div>
    </>
  )
}


export default KubePrometheus