import React from 'react';

interface PanelProps {
  grafanaPanelUrl: string;
}
function Panel({ grafanaPanelUrl }: PanelProps) {
  return (
    <iframe
      src={grafanaPanelUrl}
      className='panel'
      loading='lazy'
      width='350'
      height='250'
    />
  )
}

export default Panel;