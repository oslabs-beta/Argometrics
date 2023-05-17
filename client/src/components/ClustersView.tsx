import React, { useState, useEffect } from 'react'
import { Cluster } from '../../../types'

interface ClusterProps {
  userId: string
  cluster: Array<Cluster>
  currCluster: Cluster
  setCurrCluster: React.Dispatch<React.SetStateAction<Cluster>>
  // pass in handleClusterClick too
}

function ClusterView({ userId, cluster, currCluster, setCurrCluster }: ClusterProps) {
  // let buttons: any = [];
  // buttons.push(<button onClick = {() => setCluster(cluster)} className='cluster-buttons'></button>)

  const buttons: JSX.Element[] = cluster.map((clusterContent: any, idx: number) => {
    const clusterButton = <button key = {idx} onClick = {() => setCurrCluster(clusterContent)} className='cluster-buttons'>{clusterContent.clusterName}</button>;
    return clusterButton
  })
  
  return(
    <div id="cluster-container">
      <h1>Cluster View</h1>
      {buttons}
    </div>
  )
 }

export default ClusterView;

