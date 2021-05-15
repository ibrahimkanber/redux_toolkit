import "./App.css";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        display: "flex",
       
        flexDirection:"column",
        width: 1200,
        height: 800,
        margin: "50px auto",
        border:"2px solid red"
      }}
    >
      <div style={{textAlign:"center",width:50,height:50,margin:"30px auto",backgroundColor:"#deb1be",color:"blue",fontSize:30,fontWeight:"bold"}}>{counter}</div>
      <div style={{display:"flex",margin:"30px auto"}}>
        <Child1 counter={counter} />
        <Child2 setCounter={setCounter} />
      </div>
    </div>
  );
}

export default App;
