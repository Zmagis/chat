import React from "react";
import propTypes from "prop-types";

const right = author => {
  if (author === "Me") {
    return {
      textAlign: "right",
      alignItems: "flex-end"
    };
  }
};

const Message = ({ message, author }) => (
  <div id="message" style={right(author)}>
    <div className="inner-message">
      <i>{author}</i>: {message}
    </div>
  </div>
);

Message.propTypes = {
  message: propTypes.string.isRequired,
  author: propTypes.string.isRequired
};

export default Message;
