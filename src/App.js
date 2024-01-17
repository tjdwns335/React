import React from 'react';
// 자식 컴포넌트
function Child() {
  return <div>나는 아들입니다.</div>
}
function App() {
  return (
    <>
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
    </>
  );
}
export default App;