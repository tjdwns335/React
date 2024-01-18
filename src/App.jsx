import React, { useState } from "react";
import "App.css";

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

  // 추가 버튼 클릭
  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      age,
      name: name,
    }
    setUsers([...users, newUser]);
  };

  // 삭제 버튼 클릭(x)
  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter((users) => users.id !== id)
    setUsers(newUsers);
  }

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
        {users.map(function (item) {
          return (
            <User
              key={item.id}
              item={item}
              removeFunction={clickRemoveButtonHandler}
            />);
        })}
      </div>
    </div>
  );
};

const User = ({ item, removeFunction }) => {
  return (
    <div key={item.id} className="squareStyle">
      {item.age} - {item.name}
      <button onClick={() => removeFunction(item.id)}>x</button>
    </div>);
};
export default App;