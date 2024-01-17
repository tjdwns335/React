import React from 'react'

export default function App() {
  const number = 11;
  const pTagStyle = {
    color: 'red',
  }
  return (
    <div className="test-class">
      <p>안녕하세요 리엑트입니다.</p>
      {/* 주석을 사용하는 방법입니다 */}
      {/* 삼항 연사자를 사용해볼게요! */}
      <p style={pTagStyle}>
        {
          number > 10 ? number + "은/는 10보다 크다" : number + "은/는 10보다 작다"
        }
      </p>
    </div>
  )
}
