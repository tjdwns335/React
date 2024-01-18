import React, { useState } from 'react'

function App() {
  const [obj, setObj] = useState({
    name: 'joon',
    age: '30',
  });
  return (
    <div>
      <div>{obj.name}</div>
      <button onClick={() => {
        obj.name = 'joon2';
        const obj2 = { ...obj };
        setObj(obj2);
        // 새로운 객체를 만들어야 한다.
        // setObj(obj);
      }}>변경!</button>
    </div >
  )
}

export default App