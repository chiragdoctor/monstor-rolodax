import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monstors: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monstors: users }));
  }

  render() {
    const { monstors, searchField } = this.state;
    const filteredMonstors = monstors.filter((monstor) =>
      monstor.name.toLowerCase().includes(searchField),
    );

    return (
      <div className='App'>
        <h1>Monstors Rolodex</h1>
        <SearchBox
          handleChange={(e) => this.setState({ searchField: e.target.value })}
          searchField={searchField}
          placeholder='search monstors'
        />
        <CardList monstors={filteredMonstors} />
      </div>
    );
  }
}

export default App;
