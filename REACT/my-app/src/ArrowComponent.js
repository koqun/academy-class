// import { propTypes } from "prop-types";

// 화살표 함수로 만드는 컴포넌트
// 모듈로 내보내기 위해 ArrowComponent에 담아서
const ArrowComponent = (props) => {
  // 비구조화 할당 문법을 통해 props의 내부값을 추출
  const { name, children, diftypechildren } = props;
  return (
    <div>
      {/* props.children을 통해서 vue의 slot같이 값을 사용할 수 있다 */}
      <p> { children } ArrowComponent </p>
      <p> { name } ArrowComponent </p>
      <p> { diftypechildren } ArrowComponent </p>
      화살표 함수로 만든 컴포넌트 ArrowComponent
    </div>
  ) 
};

// app.js의 props 값이 오지않으면, 밑의 defaultProps 값으로 대체된다.
ArrowComponent.defaultProps = {
  name : "익명",
  children : "아무개"
}

// diftypechildren의 props 자료타입을 설정해주는 속성 ?
// ArrowComponent.propTypes = {
//   diftypechildren : propTypes.string,
// }

export default ArrowComponent;