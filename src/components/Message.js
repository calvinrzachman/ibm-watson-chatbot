import React from "react";

const message = props => {
  // console.log("Props: ", props);
  const isUser = props.isUser ? "user" : "watson";
  // console.log("User?: ", isUser);
  // console.log("Message: ", props.message);
  return (
    <section className={"messageContainer"}>
      <article className={"message " + isUser}>{props.message}</article>
    </section>
  );
};

export default message;
