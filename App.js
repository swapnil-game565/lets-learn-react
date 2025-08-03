/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm H1 tag</h1>
 *          <h2>I'm H1 tag</h2>
 *      </div>
 * </div>
 * 
 */

// this is React Core

// Chatpter 1-3
    // const heading = React.createElement("h1", //html tag
    //     { id: "heading" },  
    //     "Hello world from React!"); 
    //     //{} , "helloword " are both are props of H1 element.

    //     console.log(heading);  //heading is not a html tag, Its a react object. React liabrary will convert it into html tag.

    // const root = ReactDOM.createRoot(document.getElementById("root")); // this is react DOM


    // root.render(heading); // Rending heading into the Root Tag


// Chapter 4:
const parent = React.createElement("div",
            { id: "parent"},
                React.createElement("div",
                    { id:"child"},
                    [React.createElement("h1",{id:"heading1"},"I'm an H1 tag."),
                        React.createElement("h2",{id:"heading2"},"I'm an H2 tag.")
                    ]
                )
        );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);