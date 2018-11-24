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

// {
/* 

<div id="chat">
<section>
    Ask Watson about the IBM Finish Line Event
</section>
<section>
    <form action="" onsubmit="submitMessage()">
        <label for="chatInput" class="required"></label>
        <input id="chatInput" type="text" placeholder="Type here..." autocomplete="off" required>
        <hr>
        <input type="submit" id="submit" on>
    </form>
</section>
<section>
    Find out who stood out
</section>
</div>
*/
// }
