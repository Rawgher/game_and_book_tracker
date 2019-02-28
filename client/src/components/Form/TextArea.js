import React from "react";
import "./Form.css";

export const TextArea = props => (
  <div className="pa2 black-80">
    <textarea
      className="pa2 input-reset ba bg-transparent w-100 measure2 borderColor"
      rows="20"
      {...props}
    />
  </div>
);
