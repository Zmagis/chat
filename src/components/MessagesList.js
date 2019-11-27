import React from "react";
import propTypes from "prop-types";
import Message from "./Message";

const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      {messages.map(message => (
        <Message key={messages.id} {...message} />
      ))}
    </ul>
  </section>
);

MessagesList.propTypes = {
  messages: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      author: propTypes.string.isRequired,
      message: propTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessagesList;
