import React from 'react'
import './sticker.css'
const Sticker = React.memo(function Sticker(props) {
   console.log(props)
   const { text, stickerId, title } = props;
    
    return (
      <div
        id={stickerId} // Уникальный ID для каждого стикера
        className="l"
        draggable={true}
      >
        <a>
          <h2>{title}</h2>
          <p>{text}</p>
        </a>
      </div>
    );
  });

export default Sticker;