import React from "react";

export const TextArea = props =>
  <div className="form-group">
    <textarea className="form-control" style={{resize: 'none'}} rows="10" {...props} />
  </div>;
