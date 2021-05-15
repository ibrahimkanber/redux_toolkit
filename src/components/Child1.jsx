import React from 'react'
import Child1Child from "./Child1Child"

function Child1({counter}) {
    return (
        <div style={{width:400,height:400,backgroundColor:"yellow",margin:15,textAlign:"center",padding:10}}>
            Child1
            <div style={{textAlign:"center",width:50,height:50,margin:"1px auto",backgroundColor:"#deb1be",color:"blue",fontSize:30,fontWeight:"bold"}}>{counter}</div>
            
           <Child1Child counter={counter}/>
        </div>
    )
}

export default Child1
