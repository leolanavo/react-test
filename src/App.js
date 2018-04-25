import React, { Component } from 'react';
import axios from 'axios';

import CardList from './components/card-list';

import './App.css';

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

        let list = []
        for (let card_list of obj) {
          list.push(
            <CardList id={card_list.id} title={card_list.title} cards={card_list.cards}/>
          );
        }

        this.setState({ card_lists: list });
      })
  }


  render() {
    return (
      <div className="App" >
        { this.state.card_lists }
        <div className="wrapper-spacer-right"/>
      </div>
    );
  }
}

export default App;
