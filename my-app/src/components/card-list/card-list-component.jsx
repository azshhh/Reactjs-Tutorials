import { Component } from "react";

class CardList extends Component {
  render() {
    console.log('render');
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
            <h6>{monster.email}</h6>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
