import React from "react";

export const FormBtn = props => (
  <button
    {...props}
    style={{ marginBottom: 10 }}
    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
  >
    {props.children}
  </button>
);
