import React, { Component } from "react";

import Login from "./components/Login";
import MessagingPanel from "./components/MessagingPanel";

class App extends Component {
  state = {
    username: null
  };

  setUsername = username => {
    this.setState({
      username
    });
  };
  render() {
    return (
      <div id="app">
        {!this.state.username ? (
          <Login setUsername={this.setUsername} />
        ) : (
          <MessagingPanel username={this.state.username} />
        )}
      </div>
    );
  }
}

export default App;
