//getElementById를 이용하면 HTML의 아이디 값을 가져올수있다
const loginForm =document.getElementById("login-form");

//querySelector를 이용하면 CSS 선택자를 이용해서
//요소의 첫번째 태그를 선택할수있다
const loginInput =document.querySelector("#login-form input");
const greeting =document.querySelector("#greeting");

const memoFormShow =document.querySelector("#memo-form");

//버튼을 눌렀을 때 input의 값 가져오기
function onLoginSubmit(event){
    //console.dir(loginInput); //loginInput 안에 있는 속성값을 확인
    event.preventDefault();//이벤트를 막는다.

    //loginInput에서 value값
    const username =loginInput.value;

    //greeting.innerHTML ="반갑습니다 "+username+"님";
    greeting.innerHTML =`반갑습니다 ${username}님`;//`` 백틱

    //classList는 태그에 class를 추가하거나 제거하는 메서드
    loginForm.classList.add("hidden");//class="hidden"
    memoFormShow.classList.remove("hidden");
}

//이벤트 리스너 : 이벤트가 발생하는지 듣고있는 메서드
//이벤트가 발생할떄 그 함수를 실행시켜주는 역할
//어디에 이벤트가 발생하면, 어떤 함수를 실행시켜야 하는지

//loginForm.addEventListener("submit", onLoginSubmit);

$("#login-form").on("submit", function(event){
    event.preventDefault();
    const user = $("##login-form input").prop("value");
    $("#greeting").text(`반갑습니다. ${username}님`);

    $("#login-form").addClass("hidden");
    $("#memo-form").removeClass("hidden");
});