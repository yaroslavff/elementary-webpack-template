import React from "react";
import {render} from "react-dom";

import Post from "./components/some/js/some";
import "./components/analytics/ts/analytics.ts";
import "./components/some/js/babel";
import "./index.scss";

// const heading = document.createElement("h1");
const root = document.querySelector("#root");
// const img = document.createElement("div");
// img.classList.add("logo");
// root.append(img);
// const header = f();

// heading.textContent = "Webpack!";
// root.append(heading);
// root.append(header);

const post = new Post("Webpack Post");

console.log("Вывод в консоль:", post.toString());

const App = () => (
    <div className="container">
        <h1>
            Hello Webpack!
        </h1>
        <hr />
        <div className="logo logo-webpack" />
        <hr />
        <div className="pic-container">
            <div className="logo logo-sass" />
            <div className="logo logo-ts" />
            <div className="logo logo-react"/>
        </div>
    </div>
);

render(<App/>, document.querySelector("#root"));