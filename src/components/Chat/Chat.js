import React, { Component } from "react";

import Messages from "../Messages";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ChatInput from "../ChatInput/ChatInput";

class Chat extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Messages />
        <ChatInput />
        <Footer />
      </div>
    );
  }
}

export default Chat;
