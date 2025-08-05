import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = () => (<h1 id="heading" className="head"> 
    This is Title Functional Component
</h1>);

const reactElementObj = <h2> This is react element</h2>;
//Javascript inside Component
const sum = 10 * 100;

const Heading = () => (
    <div className="second-component">
        <h1>{100+300} {console.log('this is testing console log inside component.')}</h1>
        {Title()}
        <Title />
        <Title></Title>
        {reactElementObj}
        <h2> Printed Javascript value inside Functional Component. </h2>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);