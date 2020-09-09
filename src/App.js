import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

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
        <input
          type='search'
          placeholder='search monstors'
          onChange={(e) => this.setState({ searchField: e.target.value })}
          value={this.state.searchField}
        />
        <CardList monstors={filteredMonstors} />
      </div>
    );
  }
}

export default App;
