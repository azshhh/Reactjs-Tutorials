import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Redbull', lastName: 'Racing' },
      // name: 'Redbull',
      company: 'React'
    };
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button onClick={() => {
            this.setState(() => {
              // This fxn updates state in UI
              return { name: { firstName: 'Mercedes', lastName: 'Racing' } }
            }, () => {
              // This fxn updates state in console, its a callback fxn 
              console.log(this.state);
            });
          }}>
            Change Name
          </button>
        </header>
      </div >
    );
  }
}

export default App; 
