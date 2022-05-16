import { Component } from 'react';

class MyLogin extends Component {
  render() {
    const login = true;
    return (
      login ? (
        <div>
          <h1>로그인에 성공하였습니다 MyLogin</h1>
          <h3>홍길동 입니다 MyLogin</h3>
        </div>
      ) : (
        <div>
          <h1>로그인이 필요합니다 MyLogin</h1>
          <h3>리액트를 시작했습니다 MyLogin</h3>
        </div>
      )
    );
  }
}

export default MyLogin;