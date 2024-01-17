import React, { useState } from 'react'

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // id가 필드가 변경될 경우
  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  }
  // Password가 필드가 변경될 경우
  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      아이디 : <input
        type="text"
        value={id}
        onChange={onIdChangeHandler}
      />
      <br />
      비밀번호 : <input
        type="password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <br />
      <button onClick={function () {
        password.map()
        alert(`고개님이 입력하신 아이디는  ${id}  이며, 비밀번호는 ${password} 입니다.`);
        setId('');
        setPassword('');
      }}>로그인</button>
    </div >
  );
}

export default App