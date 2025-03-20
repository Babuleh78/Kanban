import React from 'react'
import './sticker.css'
const Sticker = React.memo(function Sticker(props) {
   console.log(props)
   const { text, stickerId, title } = props;
    function dragStartHandle(e) {
      e.dataTransfer.setData('text/plain', e.target.id); // Сохраняем ID элемента
      e.target.style.opacity = '0.4'; // Визуальный эффект
    }
  
    function dragLeaveHandle(e) {
      e.target.style.backgroundColor = ''; // Убираем подсветку
    }
  
    function dragEndHandle(e) {
      e.target.style.opacity = '1'; // Восстанавливаем визуальный эффект
    }
  
    function dragOverHandle(e) {
      e.preventDefault(); // Разрешаем сброс
      e.dataTransfer.dropEffect = 'move'; // Указываем тип операции
    }
  
    function dragDropHandle(e) {
      e.preventDefault();
      const stickerId = e.dataTransfer.getData('text/plain'); // Получаем ID элемента
      const stickerElement = document.getElementById(stickerId); // Находим элемент
      e.target.appendChild(stickerElement); // Добавляем элемент в новый контейнер
      stickerElement.style.opacity = '1'; // Восстанавливаем визуальный эффект
    }
  
    return (
      <div
        id={stickerId} // Уникальный ID для каждого стикера
        className="l"
        draggable={true}
        onDragStart={(e) => dragStartHandle(e)}
        onDragLeave={(e) => dragLeaveHandle(e)}
        onDragEnd={(e) => dragEndHandle(e)}
        onDragOver={(e) => dragOverHandle(e)}
        onDrop={(e) => dragDropHandle(e)}
      >
        <a>
          <h2>{title}</h2>
          <p>{text}</p>
        </a>
      </div>
    );
  });

export default Sticker;