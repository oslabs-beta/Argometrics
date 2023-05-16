import React from 'react';

interface PanelProps {
  grafanaPanelUrl: string;
}
function Panel({ grafanaPanelUrl }: PanelProps) {
  return (
    <iframe src={grafanaPanelUrl} className='panel'/>
  )
}

export default Panel;