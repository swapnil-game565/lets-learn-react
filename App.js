import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (<h1 id="heading" className="head"> 
This is JSX Heading.
</h1>);

console.log(heading);

// javascript function that return true.
const jsFn = () => true; // not need to use curly brases.

//Functional components (Name should be start with Capital letter.)
const HeadingComponents = () => (
     <div id="container">
        <h1 className="heading">This is return from Functional Components.</h1>
     </div>
);

const HeadingComponents2 = () => <h1 className="heading">This is return from Functional Components.</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);