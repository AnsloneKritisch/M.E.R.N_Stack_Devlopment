import React from "react";

function SampleCode(props)
{
    return <h1 style={{textAlign:'center'}}> Hello Its <span style={{color:'red'}}>{props.name}</span> and my age is  <span style={{color:'red'}}>{props.age}</span>   </h1>
}

export default SampleCode