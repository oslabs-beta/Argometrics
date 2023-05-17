import React, { useState, useEffect } from 'react'
import { Cluster } from '../../../types'

interface ClusterProps {
  userId: string
  cluster: Array<Cluster>
  setCluster: React.Dispatch<React.SetStateAction<Array<Cluster>>>
  // pass in handleClusterClick too
}

function ClusterView({ userId, cluster, setCluster }: ClusterProps) {
  // let buttons: any = [];
  // buttons.push(<button onClick = {() => setCluster(cluster)} className='cluster-buttons'></button>)

  const buttons: JSX.Element[] = cluster.map((clusterContent: any, idx: number) => {
    return <button key = {idx} onClick = {() => setCluster(clusterContent[idx])} className='cluster-buttons'> </button>
  })
  return(
    <div id="cluster-container">
      <h1>Cluster View</h1>
      {buttons}
    </div>
  )
 }

export default ClusterView;