import React from "react"
import ReactDom from "react-dom"
import Outside from "./sample_comp"

function Header()
{
  return <div style={{ textAlign:'center'}}><h1 style={{color:"blue"}}> This is my Heading </h1></div>
}

ReactDom.render( <div> <Header></Header> <Outside></Outside> <Header></Header> </div> ,  document.getElementById("root"))
