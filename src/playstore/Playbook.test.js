import React from "react";
import ReactDOM from "react-dom";
import Playapp from "../playstore/Playapp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Playapp />, div);
  ReactDOM.unmountComponentAtNode(div);
});