import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Users</h1>
        </header>
        <h1>test!!!</h1>
        <h2>test!!!</h2>

        {this.state.users.map(user =>
          <div key={user.id}>{user.name}</div>
        )}
      </div>
    );
  }
}

export default App;
