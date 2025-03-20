
import './column.css';
import AddBtn from '../addBtn/addBtn';
import Sticker from '../sticker/sticker';
import React, { useState, useRef  } from 'react';
function Column(props) {
  console.log(props)
  
  const [stickers, setStickers] = useState([])
  const [isDragging, setIsDragging] = useState([])
  const [position, setPosition] = useState([]) // Позиция мыши
  const [offset, setOffset] = useState([]) //Смещение мыши относительно левого верхнего в начале движения
  const columnRef = useRef(null)

  const addSticker = () => {
    const newItem = `Sticker ${stickers.length + 1}`;
    setStickers([...stickers, newItem]);
  };

  const handleDoubleClick = (e) => {
    if (e.button === 0) { // Проверяем, что нажата левая кнопка мыши
      columnRef.current.classList.toggle("resizable"); // Переключаем класс
    }
  };
    const handleMouseDown = (e) => { //Пользователь нажал на мышь
      if(e.button === 0){
        return;
      }
    setIsDragging(true)
    const { clientX, clientY} = e
    const {offsetLeft, offsetTop} = columnRef.current
    setOffset({
      x: clientX - offsetLeft,
      y: clientY - offsetTop
    })
  }

  const hadleMouseMove = (e) =>{ //Пользователь двигает мышью
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
      className="column-container"
      id={props.columnName}
      draggable={isDragging}
      ref = {columnRef}
      style={{
        position: 'sticky',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}

      onMouseDown={handleMouseDown}
      onMouseMove={hadleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} 
      onContextMenu={(e) => e.preventDefault()}
      onDoubleClick={handleDoubleClick}
    >
      <div className="columnName" onContextMenu={(e) => e.preventDefault()}
        > {props.columnName}
        
      </div>
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
