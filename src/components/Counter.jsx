import { useState } from "react";
import Child from "./child";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count is : {count}</p>
            <button onClick={()=> setCount(count + 1)}>Click</button>
            <Child count={count}/>
        </div>
    )
}
export default Counter;