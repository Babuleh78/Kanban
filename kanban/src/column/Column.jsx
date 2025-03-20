
import './column.css';
import AddBtn from '../addBtn/addBtn';
import Sticker from '../sticker/sticker';
import React, { useState, useRef  } from 'react';
function Column(props) {
  const [stickers, setStickers] = useState([])
  const [isDragging, setIsDragging] = useState([])
  const [position, setPosition] = useState([]) // Позиция мыши
  const [offset, setOffset] = useState([]) //Смещение мыши относительно левого верхнего в начале движения
  const columnRef = useRef(null)

  const addSticker = () => {
    const newItem = `Sticker ${stickers.length + 1}`;
    setStickers([...stickers, newItem]);
  };

  const handleMouseDown = (e) => { //Пользователь нажал на мышь
    if(e.button === 0){
      return
    }
    setIsDragging(true)
    const { pageX, pageY} = e
    const {offsetLeft, offsetTop} = columnRef.current
    setOffset({
      x: pageX - offsetLeft,
      y: pageY - offsetTop
    })
  }

  const hadleMouseMove = (e) =>{ //Пользователь двигает мышью
    if(isDragging){
      const{pageX, pageY} = e

      const newX = pageX - offset.x
      const newY = pageY - offset.y
      setPosition({x: newX, y: newY})
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="column-container"
      id={props.columnName}
      draggable={isDragging}
      ref = {columnRef}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}

      onMouseDown={handleMouseDown}
      onMouseMove={hadleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} 
      onContextMenu={(e) => e.preventDefault()}
  
    >
      <div className="columnName">{props.columnName}</div>
      <div className="Column">
        <AddBtn onClick={addSticker} />
        {stickers.map((sticker, index) => (
          <Sticker
            key={index}
            title={"Title"}
            text={"Text"}
            stickerId={`Sticker-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
