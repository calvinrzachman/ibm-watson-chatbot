import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class ChatInput extends Component {
  state = {
    input: ""
  };

  componentDidMount() {
    console.log("[INSIDE componentDidMount]");
    this.props.getResponse("");
  }

  onSubmitMessage = event => {
    event.preventDefault();
    const newMessage = event.target.firstChild.value;
    this.props.addMessage(newMessage, true);
    this.props.getResponse(newMessage);
    this.setState({ input: "" });
  };

  inputChangedHandler = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
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
        <div id="questions">
          <h3>Ask Questions Like: </h3>
          <section>
            <article>How was the event?</article>
            <article>Who stood out at the event?</article>
            <article>Any hiring recommendations?</article>
          </section>
        </div>
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
    getResponse: userInput => dispatch(actions.getResponse(userInput))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInput);
