import React, { Component } from 'react';
import Task from './Task';


class List extends Component {
  renderTask(task) {
    return <Task key={task.key} name={task.name} />
  }
  render() {
    return (
      <div className="column">
      <div className="col-xs-6 col-md-4 text-center">
      {this.props.tasks.map(task => this.renderTask(task))}
      </div>
      </div>
    );
  }
}

export default List;
