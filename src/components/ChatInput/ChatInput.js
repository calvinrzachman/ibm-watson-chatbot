import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class ChatInput extends Component {
  state = {
    input: ""
  };

  onSubmitMessage = event => {
    event.preventDefault();
    console.log("[INSIDE onSubmitMessage()]");
    // const value = document.getElementById("chatInput").value;
    const newMessage = event.target.firstChild.value;
    this.props.addMessage(newMessage, true);
    this.setState({ input: "" });
  };

  inputChangedHandler = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div id="chat">
        <section>Ask Watson about the IBM Finish Line Event</section>
        <section>
          <form action="" onSubmit={event => this.onSubmitMessage(event)}>
            <input
              type="text"
              id="chatInput"
              placeholder="Type here..."
              autoComplete="off"
              onChange={event => this.inputChangedHandler(event)}
              value={this.state.input}
            />
            <hr />
            <input type="submit" id="submit" />
          </form>
        </section>
        <section>Find out who stood out</section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Receives Redux state object
  return {
    errorMessage: state.converse.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: (message, isUser) =>
      dispatch(actions.addMessage(message, isUser)),
    fetchMessage: () => dispatch(actions.fetchMessage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInput);
