import React from "react";

const message = props => {
  const isUser = props.isUser ? "user" : "watson";
  return (
    <section className={"messageContainer"}>
      <article className={"message " + isUser}>{props.message}</article>
    </section>
  );
};

export default message;
