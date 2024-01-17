import React from "react";
function Child() {
  return <div>아들입니다.</div>
}
function Mother() {
  return <Child />
}
function GrandFather() {
  return <Mother />
}
function App() {
  return (
    <>
      <GrandFather />
    </>
  )
};

export default App;