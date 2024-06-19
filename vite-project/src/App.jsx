import { useState } from 'react'


function App() {

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    // setCount((prev)=>prev+1)
  }; 
  const decrement = () => {
    setCount(count -1);
  };
  const reset = () => {
    setCount(0);
  };
  const Prime = (primenumber) => 
    {
    if (primenumber <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(primenumber); i++) {
      if (primenumber % i === 0) return false;
    }
    return true;
  }; 

  return (
    <>
      <div>
          <h1>Count: {count}</h1>
          <div>
            <button onClick={increment}>+</button>
            <button disabled={count==0} onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
         <p>Prime Number: {Prime(count) ? 'true' : 'false'}</p>

          </div>
  
      </div>
    </>
  )
}

export default App
