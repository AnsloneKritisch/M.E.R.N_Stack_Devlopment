
import React from "react"
import ReactDom from "react-dom"
import Outside from "./sample_comp"
import SampleCode from "./test_compo"


function Header()
{
  return <div style={{ textAlign:'center'}}><h1 style={{color:"blue"}}> This is my Heading </h1></div>
}

ReactDom.render( <div> <Header></Header> <Outside></Outside>   <SampleCode name="Anslone" age="18"></SampleCode>  <SampleCode name="Anshu" age="15"></SampleCode><SampleCode name="Palku" age="29"></SampleCode><SampleCode name="Palansh" age="27"></SampleCode><SampleCode name="Kritisch" age="65" ></SampleCode> <Header></Header> </div> ,  document.getElementById("root"))
