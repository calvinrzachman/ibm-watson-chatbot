import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

class Contact extends Component {
  onSubmitHandler = event => {
    // // event.preventDefault();
    console.log("Thanks for contacting us");
  };

  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <section id="contact-form">
          <form onSubmit={this.onSubmitHandler} method="">
            <label className="required">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
            <br />

            <label className="required">Email</label>
            <input type="email" id="email" placeholder="E-mail" required />
            <br />

            <label>Reason for Inquiry</label>
            <select name="" id="">
              <option value="feedback" defaultValue>
                Feedback
              </option>
              <option value="other">Other</option>
            </select>
            <br />
            <label className="required">Additional Information</label>
            <br />
            <textarea name="" id="info" cols="30" rows="10" />
            <br />
            <input type="submit" />
          </form>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Contact;
