
import './column.css';
import AddBtn from '../addBtn/addBtn';
import React from 'react';
function Column(props) {
  return (
    <div className="column-container"> 
      <div className="columnName">{props.columnName}</div>
      <div className="Column">
        <AddBtn />
      </div>
  </div>
  );
}

export default Column;
