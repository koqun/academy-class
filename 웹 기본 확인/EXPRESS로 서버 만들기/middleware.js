const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

// app.use를 통해 morgan미들웨어 사용
app.use(morgan("combined"));
// app.use를 통해 cokieParser미들웨어 사용
app.use(cookieParser());

app.get("/", (request, response)=>{
    // cookieparser를 이용하여 request에 있는 cookies를 가져올수있다
    console.log("Cookies : ", request.cookies);
    response.send("<h1>Hello express</h1>");
})

app.get("/get", (request, response)=>{
    // 쿠키 전달
    // response.cookie를 통해 쿠키의 이름과 값, 옵션 전달
    request.cookie('쿠키이름', '쿠키값', {maxAge:360000, signed:});
    response.send('쿠키를 보냄')
})

// 포스트맨을 통해서 POST 메소드 실행확인
app.post("/a", (request, response)=>{
    response.send("<h1>post test</h1>")
})