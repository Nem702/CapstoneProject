import React from "react";
import "./CustomMessage.css";

const CustomMessage = () => {
  return (
    <>
      <div className="customMessageWrapper">
        <h1>
          <i className="fa-regular fa-square-check"></i>
        </h1>
        <h4>Your reservation submission was successful!</h4>
        {/* <h4>
          If you need any help with confirming details or have any other
          questions,<br /> please give us a call at 123-456-7890.
        </h4> */}
      </div>
    </>
  );
};
export default CustomMessage;
