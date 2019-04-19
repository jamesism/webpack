import React from "react";
import ReactDOM from "react-dom";

let root = document.querySelector("#app");

if (!root) {
  root = document.createElement("div");
  root.setAttribute("id", "app");
  document.appendChild(root);
}

ReactDOM.render(React.createElement("h1", "Hello world!"), root);
