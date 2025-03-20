import React, { useState, useRef  } from 'react';
import './sticker.css'
const Sticker = React.memo(function Sticker(props) {
     
  const { text, stickerId, title } = props;
    const [isDragging, setIsDragging] = useState([])
    const [position, setPosition] = useState([]) 
    const [offset, setOffset] = useState([])
    const stickerRef = useRef(null)
   const handleMouseDown = (e) =>{
      if(e.button === 2){
        return;
      }
      setIsDragging(true)
      const {clientX, clientY} = e
      const {offsetLeft, offsetTop} = stickerRef.current
      setOffset({
        x: clientX - offsetLeft,
        y: clientY - offsetTop
      })
   }

   const handleMouseMove = (e) =>{
    if(isDragging){
      const{clientX, clientY} = e

      const newX = clientX - offset.x
      const newY = clientY - offset.y
      setPosition({x: newX, y: newY})
    }
   }
   const handleMouseUp = () => {
    setIsDragging(false);
  };


    
    return (
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} 
        onContextMenu={(e) => e.preventDefault()}

        ref = {stickerRef}
        id={stickerId} 
        className="l"
        draggable={isDragging}
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        <a>
          <h2>{title}</h2>
          <p>{text}</p>
        </a>
      </div>
    );
  });

export default Sticker;