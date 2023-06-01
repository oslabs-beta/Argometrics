import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

interface PanelProps {
  grafanaPanelUrl: string;
  i: number;
}
function Panel({ grafanaPanelUrl, i }: PanelProps) {

  const [ { isDragging }, dragRef ] = useDrag({
    type: 'index',
    item: { i, grafanaPanelUrl },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? 0.3 : 1


  return (
    <>
      <div ref={dragRef} style={ {opacity} }>
        <iframe
          src={grafanaPanelUrl}
          className='panel'
          loading='lazy'
          width='450'
          height='300'
        />
        {isDragging}
      </div>
    </>
  )
}

export default Panel;