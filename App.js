import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const title = (<h1 id="heading" className="head"> 
    This is Title Functional Component
</h1>);

//Javascript inside Component
const sum = 10 * 100;

const Heading = () => (
    <div className="second-component">
        <h1>{100+300} {console.log('this is testing console log inside component.')}</h1>
        {title}
        <h2> Printed Javascript value inside Functional Component. </h2>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);