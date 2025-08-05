import React from "react";
import ReactDOM from "react-dom/client";

//React Functional Component
const Title = () => (<h1 id="heading" className="head"> 
    This is Title Functional Component
</h1>);

//Nested React Components also called as Component Composition 
const Title2 = () => (
    <div className="second-component">
        <Title/>
        <h2> This is second Functional Components and Nested First components in this components</h2>
    </div>
)

const Heading = () => (
     <div id="container">
        <Title2 /> 
        <h1 className="heading">Second Commponents nested in This Functional Compoonant</h1>
     </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);