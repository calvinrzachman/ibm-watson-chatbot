import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../store/actions";
import Message from "./Message";

class Messages extends Component {
  componentDidUpdate(prevProps) {
    // console.log("Current Message: ", this.props.lastMessage.message);
    // console.log("Previous Message: ", prevProps.lastMessage.message);
    // console.log(
    //   this.props.lastMessage.isUser !== prevProps.lastMessage.message
    // );
    if (this.props.lastMessage.isUser !== prevProps.lastMessage.isUser) {
      // console.log("[Messages Updated]");
      this.props.fetchMessage();
    }
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log("INSIDE shouldCompUpdate");
    return this.props.lastMessage.isUser !== prevProps.lastMessage.isUser;
  }

  renderConversation() {
    // This currently rerenders the whole conversation as opposed to just appending a new message
    console.log("[INSIDE renderConversation] ");
    return this.props.conversation.map((msgObject, index) => {
      console.log(msgObject);
      return (
        <Message
          message={msgObject.message}
          isUser={msgObject.isUser}
          key={index}
        />
      );
    });
  }

  render() {
    return (
      <div id="messages">
        {/* <!-- An iMessage style UI for displaying conversation with Watson --> */}
        <section>
          <article>insert conversation with Watson here</article>
        </section>
        {this.renderConversation()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    conversation: state.converse.conversation,
    lastMessage: state.converse.lastMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMessage: () => dispatch(actions.fetchMessage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
