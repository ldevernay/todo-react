import React, { Component } from 'react';
import List from './List';

var shortid = require('shortid');

const default_board = {
  lists: [
    {
    key: shortid.generate(),
    name: "liste_1",
    tasks: [
      {key: shortid.generate(), name: "Ecrire du code"},
      {key: shortid.generate(), name: "Corriger du code"},
      {key: shortid.generate(), name: "Relire du code"}
    ]
  },
  {
    key: shortid.generate(),
    name: "liste_2",
    tasks: [
      {key: shortid.generate(), name: "Manger"},
      {key: shortid.generate(), name: "Boire"},
      {key: shortid.generate(), name: "Dormir"}
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
    return <List key={liste.key} name={liste.name} tasks={liste.tasks}/>;
  }
  render() {
    return (
      <div className="container-fluid">
      {this.state.board.lists.map(list => this.renderList(list))}
      </div>
    );
  }
}

export default Board;
