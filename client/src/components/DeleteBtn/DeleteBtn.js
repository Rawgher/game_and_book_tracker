import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span
    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
    {...props}
  >
    Delete
  </span>
);

export default DeleteBtn;
