import React, { Component } from 'react';
import List from './List';

const default_board = {
  lists: [
    {
    key: 1,
    name: "liste_1",
    tasks: [
      {key: "1-1", name: "Ecrire du code"},
      {key: "1-2", name: "Corriger du code"},
      {key: "1-3", name: "Relire du code"}
    ]
  },
  {
    key: 2,
    name: "liste_2",
    tasks: [
      {key: "2-1", name: "Manger"},
      {key: "2-2", name: "Boire"},
      {key: "2-3", name: "Dormir"}
    ]
  }
]};

class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: default_board
    };
  }
  renderList(liste){
    return <List list={liste}/>;
  }
  render() {
    return (
      <div className="board">
      {this.state.board.lists.map(list => this.renderList(list))}
      </div>
    );
  }
}

export default Board;
