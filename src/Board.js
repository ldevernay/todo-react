import React, { Component } from 'react';
import List from './List';

const default_lists = [
    {
    key: 1,
    name: "liste_1",
    tasks: [
      {key: 1, name: "Ecrire du code"},
      {key: 2, name: "Corriger du code"},
      {key: 3, name: "Relire du code"}
    ]
  },
  {
    key: 2,
    name: "liste_2",
    tasks: [
      {key: 1, name: "Ecrire du code"},
      {key: 2, name: "Corriger du code"},
      {key: 3, name: "Relire du code"}
    ]
  }
];

class Board extends Component {
  constructor() {
    super();
    this.state = {
      lists: default_lists
    };
  }
  renderList(list){
    return <List list={list}/>;
  }
  render() {
    let lists = (() => {
      for (var list in this.state.lists){
        if (this.state.lists.hasOwnProperty(list)) {
          this.renderList(list);
        }
      }
    });
    return (
      <div className="board">
      {lists}
      </div>
    );
  }
}

export default Board;
