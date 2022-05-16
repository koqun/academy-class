// 화살표 함수로 컴포넌트 작성
const ArrowLogin = (props) => {
  // props로 값을 받아와서 사용 및 출력하기
  return props.login ? (
    <div>
      <h1>로그인에 성공하였습니다 ArrowLogin</h1>
      <h3>홍길동 입니다 ArrowLogin</h3>
    </div>
  ) : (
    <div>
      <h1>로그인이 필요합니다 ArrowLogin</h1>
      <h3>리액트를 시작했습니다 ArrowLogin</h3>
    </div>
  )
}

export default ArrowLogin;