import React, { Component } from 'react';

class Task extends Component {
  render(){
    return (
      <div className="row">
      <div className="col-xs-6 col-md-4 text-center">
      <button type="button" className="btn btn-info">
      {this.props.name}
      </button>
      </div>
      </div>
    );
  }
}


export default Task;
