class Content extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      counter: 0,
      currentTime: (new Date()).toLocaleTimeString(),
    };
  };
  launchClock() {
    setInterval(() => {
      this.setState({
        counter: ++this.state.counter,
        currentTime: (new Date()).toLocaleTimeString(),
      })
    }, 1000)
  }
  render() {
      return(
        <div>
        <Logger time={this.state.currentTime}></Logger>
        </div>
      );
  }
}

class Logger extends React.Component {
  //triggered initially
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  //triggered initially once 
  componentWillMount() {
    console.log('Component will mount is triggered');
  }
  //triggered initially
  componentDidMount(e) {
    console.log('componentDidMount is triggered');
    console.log('DOM Node: ', ReactDOM.findDOMNode(this))
  }
  componetWillRecieveProps(newProps) {
    console.log('componentWillRecieveProps is triggered');
    console.log('new props: ', newProps);
  }
  //triggered every re-render
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate is triggered');
    console.log('new props', newProps);
    console.log('new state', newState);
    return true
  }
  //triggered every re-render
  componentWillUpdate(newProps, newState) {
    console.log('componentWillUpdate is triggered');
    console.log('new props: ', newProps);
    console.log('new state: ', newState);
  }
  //triggered every re-render
  componentDidUpdate(oldProps, oldState) {
    console.log('componentDidUpdate is triggered')
    console.log('new props: ', oldProps)
    console.log('old props: ', oldState)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    return (
      <div>{this.props.time}</div>
    );
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById("app")
);
