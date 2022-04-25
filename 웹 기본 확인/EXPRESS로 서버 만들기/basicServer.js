// express 모듈을 사용해서 서버 생성
// node에서 모듈(패키지 안의 메서드 ?)을 가져올 때 require로 가져옴
const { response } = require('express');
const express = require('express');

// express(); 함수를 통해 서버 생성(객체)
// 포트를 열어서 외부에서 접근가능하게 함
// 요청이 왔을 때 함수실행
const app = express();

// request 이벤트 리스너 설정
// request(요청), response(응답)
app.use((request, response) => {
    response.send('<h1>Hello express</h1>')
});

// 포트번호 지정 후 번호를 통해 외부접근
app.listen(8080, () => {
    // 서버 열리면 실행되는 콘솔로그
    console.log('Server running at http://127.0.0.1:8080')
});

