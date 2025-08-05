import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement("h1",{id:"heading"},"Laying the Foundation");

console.log(heading);

//JSX - JSX not html in javascript  or HTML inside javascript.
//JSX is looks  like html/xml
// JSX stands for JavaScript XML.
// It’s a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript.
// ✅ JSX lets you describe the UI structure in a way that feels like writing HTML, but under the hood it’s just JavaScript.

const jsxHeading = <h1 id="heading" className="head"> This is JSX Heading.</h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);