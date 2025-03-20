
import './column.css';
import AddBtn from '../addBtn/addBtn';
import Sticker from '../sticker/sticker';
import React, { useState } from 'react';
function Column(props) {
  const [stickers, setStickers] = useState([]);

  const addSticker = () => {
    const newItem = `Sticker ${stickers.length + 1}`
    setStickers([...stickers, newItem])
  };

  return (
    <div className="column-container" id = {props.columnName}> 
      <div className="columnName">{props.columnName}</div>
      <div className="Column">
        <AddBtn onClick = {addSticker}/> 
        {stickers.map((sticker, index) => (
          <Sticker key={index} name={sticker} />
        ))}
      </div>
     
  </div>
  );
}

export default Column;
