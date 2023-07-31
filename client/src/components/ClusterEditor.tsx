import React, {useState} from 'react';
import {Cluster} from '../../../types'
import '../stylesheets/ClusterEditor.scss'

interface ClusterEditorProps {
  setShowClusterEditor: React.Dispatch<React.SetStateAction<boolean>>
  cluster: Array<Cluster>
}
function ClusterEditor({ setShowClusterEditor , cluster}: ClusterEditorProps) {
  const [clusterEditorUrl, setClusterEditorUrl] = useState('');
  const [clusterEditorName, setClusterEditorName] = useState('');
  
  const createCluster = async () => {
    try {
        if (clusterEditorUrl && clusterEditorName){
          const clusterObj = {name: clusterEditorName, url: clusterEditorUrl};
          const response = await fetch('/api/cluster/add',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(clusterObj)
          });
          const result = await response.json()
      }
    }
    catch(err){
      console.log(err, 'cluster post req unsuccessful');
    }
  }

  const addCluster = () => {
    createCluster();
    setShowClusterEditor(false);
  }


  //  
  return (
    <div className='clusterEditorContainer'>
      <h2>Cluster Editor</h2>
        <div className='ClusterContainer'>
          <h5>Add Cluster</h5>
          <input type='text' placeholder='Cluster Name' className='clusterName' onChange= {(e)=> setClusterEditorName(e.target.value)}></input>
          <input type='text' placeholder='Cluster Url' className='clusterUrl' onChange= {(e)=> setClusterEditorUrl(e.target.value)}></input>
          <div className='buttonContainer'>
            <button className='addClusterButton' onClick= {() => addCluster()}>Add Cluster</button>
            <button className='homeButton' onClick= {() => setShowClusterEditor(false)}>Exit Editor</button>
          </div>
        </div>
        
    </div>
  )
}

export default ClusterEditor;
