import React from "react";
import propTypes from "prop-types";

const AddMessage = props => {
  let input;

  return (
    <section id="new-message" className="write-message">
      <textarea
        placeholder="Abc"
        onKeyPress={e => {
          if (e.key === "Enter") {
            e.preventDefault();
            props.dispatch(input.value, "Me");
            //clear textfield after message is send
            input.value = "";
          }
        }}
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={e => {
          props.dispatch(input.value, "Me");
          input.value = "";
        }}
      >
        SEND
      </button>
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: propTypes.func.isRequired
};

export default AddMessage;
