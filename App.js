import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement("h1",{id:"heading"},"Laying the Foundation");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);