import React from "react";
import ReactDOM from "react-dom";
import Pomodoro from "./containers/pomodoro";
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
    color: #f4f4f4;
}
html {
    background-color: #3D475A;
}
h1, h4, p {
    text-align: center;
}
p {padding: 1rem;}
h1 {
    padding-top: 2rem;
    font-size: 2.7rem;
    font-weight: 500;
}
h4 {font-size: 2rem;}
.intro {
    font-size: 0.9rem;
    font-weight: 200;
    max-width: 1000px;
    margin: auto;
}
`;

ReactDOM.render(
    <div>
        <GlobalStyles />
        <Pomodoro />
    </div>,
    document.querySelector("#app"),
);
