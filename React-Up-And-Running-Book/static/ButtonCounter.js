class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); //Binds the context in the constructor so you can use this.setState, which refers to the instance of this class
    this.state = {
      counter: 0,
    }
  }
  handleClick(event) {
    this.setState({
      counter: ++this.state.counter,
    })
  }
  render() {
    return (
      <div>
        {/*Passes down the current state to the child component*/}
        <ClickCounterButton
          handler={this.handleClick}
          value={this.state.counter}
          />
        <Counter
          value={this.state.counter}
          />
        {/*Passes an event up the heirarchy to the parent component where the state logic is held*/}
      </div>
    );
  }
}
class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>I have been pushed {this.props.value} times!</p>
      </div>
    );
  }
}

class ClickCounterButton extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handler}
          className="btn btn-danger"
          >Increase Volume (current volume is {this.props.value})
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById("app")
)
/*
class ButtonCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); //Binds the context in the constructor so you can use this.setState, which refers to the instance of this class
    this.state = {
      counter: 0,
    }
  }
  handleClick(event) {
    this.setState({
      counter: ++this.state.counter,
    })
  }
  render() {
    return (
      <div>
        {/*Passes down the current state to the child component*}
        <ClickCounterButton
          counter={this.state.counter}
          handler={this.handleClick}
          />
        {/*Passes an event up the heirarchy to the parent component where the state logic is held*}
      </div>
    );
  }
}

class ClickCounterButton extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handler}
          className="btn btn-danger">Increase Volume (current volume is {this.props.counter})</button>
      </div>
    );
  }
}

ReactDOM.render(
  <ButtonCounter />,
  document.getElementById("app")
)
*/
/*
class ButtonCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }
  handleClick(event) {
    this.setState({
      counter: ++this.state.counter,
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}
          className="btn btn-primary">
          You've Clicked me {this.state.counter} Times!</button>
      </div>
    );
  }
}

ReactDOM.render(
  <ButtonCounter />,
  document.getElementById("app")
)
*/
