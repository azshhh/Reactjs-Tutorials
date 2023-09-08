import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // 1. state is executed
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // 3.1. Here engine fetched data from API basically monsters as users
  componentDidMount() {
    console.log('Fetching');
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {

    // 2. Engine starts rendering
    // 7. When user searches, filteredMonsters matches the monsters using includes()
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">

        {/* 5. When user searches */}
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log(event.target.value);

            // 6. All values are stored in searchField in lowercase and is returned
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField }
            });
          }}
        />

        {/* 3. It will start to map monsters through invoking componentDidMount()*/}
        {/* 4. Finally it renders monsters.name on UI */}
        {/* 8. Renders monsters matching searchField */}
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
      
    );
  }
}

export default App;
