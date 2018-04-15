import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

let cards = (arr) => {
  let cards_html = new Array(arr.length);

  for (let i in arr) {
    let card = arr[i];

    cards_html[i] = (
      <div className="card" key={card.id + "c"}>
        <span>
          {card.body}
        </span>
      </div>
    );
  }

  return cards_html;
}

let render_card_lists = (obj) => {
  let final = new Array(Object.keys(obj).length);

  for (let i in obj) {
    let card_list = obj[i];
    let cards_html = cards(card_list.cards);

    final[i] = (
      <div className="card-list" key={card_list.id + "cl"}>

        <div className="card-list-title">
          {card_list.title}
        </div>
        <div className="card-list-title-spacer-bottom"/>

        <div className="card-list-body">
          {cards_html}
        </div>

        <div className="card-list-footer"/>
      </div>
    );
  }

  return final;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      card_lists: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3004/lists`)
      .then(res => {
        const obj = res.data;
        const list = render_card_lists(obj);
        this.setState({ card_lists: list });
      })
  }


  render() {
    return (
      <div className="App">
        { this.state.card_lists }
        <div className="wrapper-spacer-right"/>
      </div>
    );
  }
}

export default App;
