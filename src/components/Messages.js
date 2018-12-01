import React, { Component } from "react";
import { connect } from "react-redux";
import Message from "./Message";

class Messages extends Component {
  renderConversation() {
    // This currently rerenders the whole conversation as opposed to just appending a new message
    // Updating DOM with new message was not an issue in Vanilla JS version of app
    return this.props.conversation.map((msgObject, index) => {
      return (
        <Message
          message={msgObject.message}
          isUser={msgObject.isUser}
          key={index}
        />
      );
    });
  }

  componentDidUpdate() {
    this.updateScroll();
  }

  updateScroll = () => {
    console.log("updating scroll");
    let element = document.getElementById("messages");
    element.scrollTop = element.scrollHeight;
  };

  render() {
    return (
      <div id="messages">
        {/* <!-- An iMessage style UI for displaying conversation with Watson --> */}
        {this.renderConversation()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    conversation: state.converse.conversation
  };
};

export default connect(
  mapStateToProps,
  null
)(Messages);
