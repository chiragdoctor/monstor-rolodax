import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monstors: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monstors: users }));
  }

  render() {
    return (
      <div className='App'>
        <CardList monstors={this.state.monstors} />
      </div>
    );
  }
}

export default App;
