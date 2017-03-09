import React, { Component } from 'react';
import Task from './Task';


class List extends Component {
  renderTask(task) {
    return <Task key={task.key} name={task.name} />
    // onClick={() => this.props.onClick(task.key)} />;
  }
  render() {
    // const div_key = this.props.list.name + this.props.list.key;
    return (
      <div className="list">
      <div>{this.props.name}</div>
      <ul>{this.props.tasks.map(task => this.renderTask(task))}</ul>
      </div>
    );
  }
}

export default List;
