// src/App.js
import React, { useState } from "react";
// import Square from "./components/Square.js";
import "App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.

function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ])
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => { setName(event.target.value); };
  const ageChangeHandler = (event) => { setAge(event.target.value); };
  const clickAddButtonHandler = () => {
    // 1.새로운 형태의 이놈을 만든다.
    // 이놈: { id: 1, age: 30, name: "송중기" },
    // 2. 이놈을 배열에 더한다.
    const newUser = {
      id: users.length + 1,
      age,
      name: name,
    }
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <div>
        이름 : &nbsp;
        <input value={name} onChange={nameChangeHandler} />
        <br />
        나이 :&nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <button onClick={clickAddButtonHandler}>추가</button>
      </div>
      <div className="app-style">
        {
          users.map((item) =>
          (<div key={item.id} className="squareStyle">
            {item.age} - {item.name}
          </div>)
          )
        }
      </div>
    </div>
  );
}

export default App;