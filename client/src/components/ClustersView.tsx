import React, { useState, useEffect } from 'react'
import { Cluster } from '../../../types'
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/ClustersView.scss'

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
  console.log('cluster', cluster)
  const buttons: JSX.Element[] = cluster.map((clusterContent: any, idx: number) => {
    const clusterButton = <button key = {uuidv4()} onClick = {() => setCurrCluster(clusterContent)} className='cluster-buttons'>{clusterContent.clusterName}</button>;
    return clusterButton
  })

  return(
    <div id="cluster-container">
      <h1>Current Cluster: {currCluster.clusterName}</h1>
      {buttons}
    </div>
  )
 }

export default ClusterView;

