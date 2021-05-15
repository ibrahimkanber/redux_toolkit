import React from 'react'

function Child1Child({counter}) {
    return (
        <div style={{width:200,height:200,backgroundColor:"tomato",margin:"30px auto",textAlign:"center",padding:10}}>
           Child1Child 
           <div style={{textAlign:"center",width:50,height:50,margin:"1px auto",backgroundColor:"#deb1be",color:"blue",fontSize:30,fontWeight:"bold"}}>{counter}</div>
        </div>
    )
}

export default Child1Child
