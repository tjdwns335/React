import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    const newPlusCount = count + 1;
    setCount(newPlusCount);
  }
  return (
    <div>
      {count}
      <br />
      <button onClick={() => {
        const newCount = count - 1
        setCount(newCount);
      }}>-1</button>
      <button onClick={plusCount}>+1</button>
    </div>
  )
}

export default App