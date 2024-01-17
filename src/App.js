import React from 'react'

// props를 통해 부모 -> 자식 데이터가 전달됐다.
function Son(props) {
  return <div>나는 {props.gfName}의 손자입니다.</div>
}
// 부모 -> 자식 정보를 전달했다!
function Mother(props) {
  const gfName = props.grandFatherName;
  return <Son gfName={gfName} />
}

function GrandFather() {
  const name = '산타할아버지'
  return <Mother grandFatherName={name} />
}

function App() {
  return <GrandFather />
}

export default App