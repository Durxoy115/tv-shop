import React from "react";

const Extra = () => {
  return (
    <div>
      <div>
        <h2>How React Work?</h2>
        <p>
          React create a virtual dom. Virtual dom compare with actual dom and
          identify the changes. Actually it makes a dom try and then
          identify.ReactDOM in turn, recursively creates nodes depending on
          their 'type' property and appends them finally to the DOM.How does
          React work in browser? React internally creates, updates, and destroys
          instances to figure out the DOM elements tree that needs to be
          rendered to the browser.
        </p>
      </div>
      <div>
        <h2>Different between props and state?</h2>
        <p>
          1. Props can read only. <br />
          2. Props can to be modified.
        </p>
        <p>
          1.State changes can be asynchronous. <br />
          2.State can be modified using this.state
        </p>
        <h1>Thank you!!</h1>
      </div>
    </div>
  );
};

export default Extra;
