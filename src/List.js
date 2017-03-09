import React, { Component } from 'react';
import Task from './Task';


class List extends Component {
  renderTask(task) {
    return <Task task={task} onClick={() => this.props.onClick(task.key)} />;
  }
  render() {
    let tasks = (() =>{
      for (var task of this.props.list.tasks) {
        this.renderTask(task)
      }
    });
    return (
      <div className="list">
      <div>{this.props.list.name}</div>
      <ul>{tasks}</ul>
      </div>
    );
  }
}

export default List;
