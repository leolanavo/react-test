import React, { Component } from 'react';
import './App.css';

let cards = (n) => {
  let cards_html = new Array(n);

  for (let i = 0; i < n; i++) {
    cards_html[i] = (
      <div className="card" key={i + "c"}>
        <span>
          Chupa sociedade
        </span>
      </div>
    );
  }

  return cards_html;
}

let card_lists = (n) => {
  let title = "Foda-se"
  let final = new Array(n);

  for (let i = 0; i < n; i++) {
    let cards_html = cards(12);

    final[i] = (
      <div className="card-list" key={i + "cl"}>

        <div className="card-list-title">
          {title}
        </div>
        <div className="card-list-title-spacer-bottom"/>

        <div className="card-list-body">
          {cards_html}
        </div>

        <div className="card-list-footer"/>
      </div>
    );
  }

  return (
    <div className="App">
      {final}
      <div className="wrapper-spacer-right">
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      card_lists(6)
    );
  }
}

export default App;
