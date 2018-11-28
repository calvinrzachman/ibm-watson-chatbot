import React, { Component } from "react";
import "./App.css";

import Messages from "./components/Messages";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ChatInput from "./components/ChatInput/ChatInput";

class App extends Component {
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

export default App;
