import React, { useRef, useState, useEffect, ReactHTMLElement } from 'react'
import { Cluster } from '../../../types'
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/ClustersView.scss'
import { useDrag, useDrop } from 'react-dnd'

interface ClusterProps {
  userId: string
  cluster: Array<Cluster>
  currCluster: Cluster
  setCurrCluster: React.Dispatch<React.SetStateAction<Cluster>>
  showClusterEditor: boolean
}

function ClusterView({ userId, cluster, currCluster, setCurrCluster , showClusterEditor}: ClusterProps) {
  const [ buttons, setButtons ] = useState<React.ReactElement[]>([])
  const [ reCluster, setReCluster ] = useState(cluster)

  const [ { canDrop, isOver }, dropRef ] = useDrop({
    accept: 'button',
    drop: (item: any, monitor) => {
      const { clusterContent, index } = item
      const hoverIndex = buttons.findIndex((btn) => btn.props.index === monitor.getItem().index)
      handleDrop(index, hoverIndex)
      
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  const handleDrop = (index: number, hoverIndex: any) => {
    const draggedButton = buttons[index]
    const newButtons = [...buttons]
    newButtons.splice(index, 1)
    newButtons.splice(hoverIndex.index, 0, draggedButton)
    setButtons(newButtons)
  }

  useEffect(() => {
    if (Array.isArray(cluster)) {
      const button: React.ReactElement[] = cluster.map((clusterContent: any, idx: number) => {
      return <CreateButton key={uuidv4()} setCurrCluster={setCurrCluster} handleDrop={handleDrop} index={idx} clusterContent={clusterContent} buttons={buttons} setButtons={setButtons}/>;
      })
      setButtons(button)
    }
  }, [cluster, reCluster])


  
  

  return(
    <>
      <div id="cluster-name-container">
        <div id='cluster-name'>
          <h2>Cluster Name</h2>
          <div id="currCluster-name-container">
            {currCluster.clusterName}
          </div>
        </div>     
        <div ref={ dropRef } id="cluster-container">
          {buttons}
        </div>
      </div>
    </>
    
  )
 }

export default ClusterView;

// button component
interface ButtonProps {
  clusterContent: Cluster
  buttons: Array<JSX.Element>
  setButtons: (state: []) => void
  index: number
  setCurrCluster: React.Dispatch<React.SetStateAction<Cluster>>
  handleDrop: (index: number, item: any) => void;
}

function CreateButton({clusterContent, buttons, setButtons, index, setCurrCluster, handleDrop}: ButtonProps) {
  
  const [ { isDragging }, dragRef ] = useDrag({
    type: 'button',
    item: { clusterContent, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: 'button',
    drop: (item) => handleDrop(index, item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });


  return (
    <>
      <div ref={dropRef}>
        <button ref={dragRef} onClick = {() => setCurrCluster(clusterContent)} className='cluster-buttons' style={{ opacity: isDragging ? 0.3 : 1 }} >{clusterContent.clusterName}</button>
        {isDragging}
      </div>
    </>
  )
}
