const express = require('express');
const app = express();

app.get('/', (request, response)=>{
    const template = `
    <h1>Hello express</h1>
    <a href="/정적파일.html">파일입니다</a>
    <a href="/white-flower.jpg">사진입니다</a>
    `;

    response.send(template);
})