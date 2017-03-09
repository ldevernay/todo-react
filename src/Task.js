import React, { Component } from 'react';

class Task extends Component {
  render(){
    return (
      <li className="task">
      {this.props.name}
      </li>
    );
  }
}
// function Task(props) {
//   return (
//     <li key={this.props.key} className="task">
//       {this.props.name}
//     </li>
//   );
// }


export default Task;
// onClick={() => props.onClick()}>
