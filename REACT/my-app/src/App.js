import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent.js'
import ArrowComponent from './ArrowComponent.js'
import MyLogin from './MyLogin.js';
import ArrowLogin from './ArrowLogin.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          내용 추가
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyComponent />
        <ArrowComponent children="자식시끼" diftypechildren="따른타입시끼" />
        {/* props에 string말고 다른 자료형을 사용할라면 {} 안에 값을 쓴다 */}
        <MyLogin />
        <ArrowLogin login="true" />
        {/* props 속성의 이름을 통해서 props 값을 전달할 수 있다 */}
      </header>
    </div>
  );
}

export default App;
