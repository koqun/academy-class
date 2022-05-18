import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "is message"
    };
    // this.onClickEvent = this.onClickEvent.bind(this); 
    // 이거 쓰면 button에 this.onClickEvent만 적으면 됨
  }

  onClickEvent() {
    this.setState(()=> ({
      message: "message has been changed"
    }));
    console.log(this.message);
  }

  onChangeMessage() {
    this.setState(()=> ({
      message: "is message"
    }));
    console.log(this.message);
  }

  render() {
    const {name} = this.props;
    const {message} = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{message}</h3>
        <button onClick={this.onClickEvent.bind(this)}>onClickEvent</button>
        <button onClick={this.onChangeMessage.bind(this)}>onChangeMessage</button>
      </div>
    )
  }
}

export default EventClass;