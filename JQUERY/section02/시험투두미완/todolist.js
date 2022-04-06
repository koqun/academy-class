//todosubmit dom 가져오기
const todoSubmit =document.querySelector("#todo_form");
const todoInput =document.querySelector("#todo_input");

//이벤트리스너를 통해 이벤트 발생
//submit 이벤트는 form에서 발생하는 이벤트
todoSubmit.addEventListener("submit", todoFormSubmit);

//버튼이 눌렸을때 todoFormSubmit 함수
function todoFormSubmit(e){
    e.preventDefault();
    console.log(todoInput.value);

    //li 생성
    const li =document.createElement(li);

    const checkbox =document.createElement

    const text =document.


    const button =document.createElement("button");
    button.textContent ="X";
    
    //board dom 가져오기
    const todoBoard =document.querySelector("#todo_board ul");
    //board에 추가
    todoBoard.appendChild(li);

    //li에 추가
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);

    //input에 빈 문자열 할당
    todoInput.value="";
}