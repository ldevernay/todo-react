import React from 'react';


function Task(props) {
  return (
    <li className="square" onClick={() => props.onClick()}>
      {props.task.name}
    </li>
  );
}


export default Task;
