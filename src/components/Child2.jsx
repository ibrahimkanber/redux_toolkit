import React from 'react'

function Child2({setCounter}) {
    return (
        <div style={{width:400,height:400,backgroundColor:"cyan",margin:15,textAlign:"center",padding:10}}>
            Child2
            
            <div>
                <button 
                style={{padding:"10px 30px",borderRadius:10,marginTop:100}}
                onClick={()=>setCounter(state=>state+1)}
                >Increase</button>
            </div>
        </div>
    )
}

export default Child2
