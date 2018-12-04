

//Higher order Component
const LoadWebsite = (Component) => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props);
      this.state.handleClick = this.state.handleClick.bind(this);
      this.state = {
        label: 'Run',
      };
    }
    getUrl() {
      return 'https://facebook.github.io/react/docs/top-level-api.html'
    }
    handleClickEvent() {
      var iFrame = document.getElementById('frame').src = this.getUrl() //loads the react website into an iframe
    }
    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this))
    }
    render() {
      console.log(this.state);
      //Two lines down..Passes state and Props as properties using spread
      return (
        <Component {...this.state} {...this.props} />
      );
    }
  }
  _LoadWebsite.displayName = 'Enhanced Component' //Defines a display name for the hoc
  return _LoadWebsite
}
/*
class Content extends React.Component {
  render() {
    return (
      <div>
        <ChildContent>
          <h1>React</h1>
          <p>Rocks</p>
        </ChildContent>
        <img src="../static/images/bg.jpg" width="100"/>
        <ChildContent>
          <a href="http://nytimes.com">http://nytimes.com</a>
        </ChildContent>
        <ChildContent>
          <a className="btn btn-danger"
              href="http://quantpolitik.com">quantpolitik</a>
        </ChildContent>
      </div>
    );
  }
}
class ChildContent extends React.Component {
  render() {
    return (
      <div>
      <div>{this.props.children[0]}</div>
            <div>{this.props.children[1]}</div>
                  <div>{this.props.children[2]}</div>
                  <div>{React.Children.map()}</div>
                  <div>{this.props.children[4]}</div>
                  <div>{this.props.children[5]}</div>
      </div>
    );
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonLabel: {
        start: "Start",

      }
    }
  }
  render() {
    let number = 1;
    return (
      <div>
        <Button
          buttonLabel={this.state.buttonLabel.start}/>
        <Button/>
        <Button title={number}/>
        <Button email="this wont be a valid email"/>
        <Button email="cofax48@aol.com"/>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button
        className="btn btn-primary"
        >{this.props.buttonLabel}</button>
    );
  }
}
Button.defaultProps = {buttonLabel:"Submit Me"};
Button.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired, //Reuqires a handler with a function value
  email(props, propName, componentName) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (!emailRegularExpression.test(props[propName])) {
      return new Error("Email validation failed!")
    }
  }
}

*/
ReactDOM.render(
  <Content/>,
  document.getElementById("app")
)
