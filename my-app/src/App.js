// import { Component } from "react";
import { useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

const App = () => {
  const [searchField, setSearchField] = useState('');

  // Reactjs is going to re-render the entire App function, only if the state-value 'searchField' changes not the set-value 'setSearchField'.
  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    // So passing state-value 'searchField' which is an empty string '', to the hook will not effect anyways
    setSearchField(searchField);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   async componentDidMount() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     this.setState(() => {
//       return { monsters: users };
//     });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (

//     );
//   }
// }

export default App;
