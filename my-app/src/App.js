import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Mercedes',
          id: 1,
        },
        {
          name: 'Ferrari',
          id: 2,
        },
        {
          name: 'Redbull',
          id: 3,
        },
      ]
    };
  }
  render() {
    return (
      <div className="App" >
        {
          // key value is used by react in order to make our app more optimized when it comes to updating and re-rendering components  on page.
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          })
        }
      </div >
    );
  }
}

export default App; 
