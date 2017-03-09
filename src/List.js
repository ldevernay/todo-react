import React, { Component } from 'react';
import Task from './Task';


class List extends Component {
  renderTask(task) {
    return <Task task={task} onClick={() => this.props.onClick(task.key)} />;
  }
  render() {
    return (
      <div className="list">
      <div>{this.props.list.name}</div>
      <ul>{this.props.list.tasks.map(task => this.renderTask(task))}</ul>
      </div>
    );
  }
}

export default List;
