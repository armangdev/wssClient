import React, { Component } from "react";

class MessagingBox extends Component {
  messageHandler = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      console.log(e.target.value)
      this.props.getMessage(e.target.value);
      e.target.value = "";
    }
  };
  render() {
    return (
      <div id="messagingBox">
        <textarea
          onKeyDown={this.messageHandler}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    );
  }
}

export default MessagingBox;
