import React from "react";
import ReactDOM from "react-dom";
import "bulma";
import Hello from "./components/hello";

ReactDOM.render(<Hello name={"Name"} />, document.querySelector("#app"));
