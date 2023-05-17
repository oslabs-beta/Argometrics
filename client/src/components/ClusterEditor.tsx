import React from 'react';

interface ClusterEditorProps {
  setShowClusterEditor: React.Dispatch<React.SetStateAction<boolean>>
}
function ClusterEditor({ setShowClusterEditor }: ClusterEditorProps) {

  return (
    <div className='clusterEditorContainer'>
      <h2>Cluster Editor</h2>
        <div className='ClusterContainer'>
          <h5>Add Cluster</h5>
          <input type='text' placeholder='Cluster Name' className='clusterName'></input>
          <input type='text' placeholder='Cluster Url' className='clusterUrl'></input>
        </div>
    </div>
  )
}

export default ClusterEditor;