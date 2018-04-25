import React, { Component } from 'react';

import Card from './card';

class CardList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      title: props.title,
      cards: props.cards
    };
  }

  render_cards(arr) {
    let cards_jsx = []

    for (let card of arr) {
      cards_jsx.push (
        <Card list_id={this.state.id} id={card.id} body={card.body}/>
      );
    }

    return cards_jsx;
  }

  render() {
    let cards = this.render_cards(this.state.cards);

    return (
      <div className="card-list" key={this.state.id + "_card_list"}>

        <div className="card-list-title">
          {this.state.title}
        </div>
        <div className="card-list-title-spacer-bottom"/>

        <div className="card-list-body">
          {cards}
        </div>

        <div className="card-list-footer"/>
      </div>
    );
  }
}

export default CardList;
