import React, { Component } from "react";

class DisplayConversation extends Component {
  render() {
    return (
      <div id="displayConversation">
        {this.props.messages.map((message, key) => (
          <div key={key}>
            {message.username}: {message.message}
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayConversation;
