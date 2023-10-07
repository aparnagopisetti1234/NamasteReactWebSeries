import React from "react";
import  ReactDOM  from "react-dom/client";


const Title=()=>(
    <h1>Namaste React</h1>
)

//Component Composition
const HeadingComponent=()=>(
    <>
    <Title/>
     <h1 className="heading">React Functioal Component</h1>
     </>
)

const jsxHeading=<h1 className="heading" tabIndex="1">Hello Namaste React🚀🚀</h1>
//console.log(jsxHeading)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);