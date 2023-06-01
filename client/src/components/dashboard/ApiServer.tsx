import React, { ReactComponentElement, useEffect, useState, FC } from 'react';
import { Cluster } from '../../../../types'
import { v4 as uuidv4 } from 'uuid';
import allMetrics, { grafanaIFrameGenerator } from '../../../../metrics';
import Panel from '../Panel';
import { useDrop } from 'react-dnd';

interface ApiServerProps {
  currCluster: Cluster;
  apiDashboard: React.ReactElement[]
  setApiDashboard: (arg: any) => void
  updateDashboard: (item: number, hoverIndex: number, name: string) => void
}


const ApiServer = ({currCluster, apiDashboard, setApiDashboard, updateDashboard}: ApiServerProps) => {
  const searchBy: string = 'apiServer'
  // console.log('currCluster', currCluster)

  const [ { isOver }, dropRef ] = useDrop({
    accept: 'index',
    drop: (item: any, monitor) => {
      const { i, grafanaPanelUrl } = item
      const hoverIndex = apiDashboard.findIndex((i) => i === monitor.getItem().index)
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
      newDashboard.push(<Panel key={uuidv4()} i={i++} grafanaPanelUrl={ url }/>)
    }
    setApiDashboard(newDashboard)
  }, [])


  return (
    <>
      <div ref={ dropRef } className='dashboard-container'>
        {apiDashboard}
      </div>
    </>
  )
}


export default ApiServer