import React from "react";
import propTypes from "prop-types";

const Message = ({ message, author }) => (
  <div id="message">
    <i>{author}</i>: {message}
  </div>
);

Message.propTypes = {
  message: propTypes.string.isRequired,
  author: propTypes.string.isRequired
}; 

export default Message;
