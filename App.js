import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (<h1 id="heading" className="head"> 
This is JSX Heading.
</h1>);

//Functional components (Name should be start with Capital letter.)
//single line return
const HeadingComponents = () => <h1 className="heading">This is single line functional component.</h1>;

//Multiline with return statement
const HeadingComponents2 = () => {
    return <h1> This is multiline functional component with return statement.</h1>
}

//Multiline without return statement
const HeadingComponents3 = () => (
     <div id="container">
        <h1 className="heading">This is Multiline Functional Component without return statement.</h1>
     </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponents3 />);