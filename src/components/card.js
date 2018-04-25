import React, { Component } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {list_id: props.list_id, id: props.id, body: props.body};

  }

  render() {
    return (
      <div className="card" key={ this.state.list_id + "_" + this.state.id + "_card" }>
        <span>
          {this.state.body}
        </span>
      </div>
    );
  }
}

export default Card;
