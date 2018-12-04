class Button extends React.Component {
  render () {
    return (
      <button
        className="btn btn-primary"
        onClick={this.props.handleClick}>
        {this.props.label}
        </button>
    );
  }
}

class Link extends React.Component {
  render() {
    return (
      <a onClick={this.props.handleClick} href="#">{this.props.label}</a>
    );
  }
}

class Logo extends React.Component {
  render () {
    return (
      <img onClick={this.props.handleClick} width="40" src="../static/images/bg.jpg" href="#"/>
    );
  }
}

//Higher order Component
const LoadWebsite = (Component) => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        label: 'Run',
        handleClick: this.handleClick.bind(this)
      };
    }
    getUrl() {
      return 'https://nytimes.com'
    }
    handleClick() {
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

const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class Content extends React.Component {
  render() {
    return (
      <div>
        <EnhancedButton />
        <br></br>
        <br></br>
        <EnhancedLink />
        <br></br>
        <br></br>
        <EnhancedLogo />
        <br></br>
        <br></br>
        <iframe id="frame" src="" width="600" height="500" />
      </div>
    );
  }
}

ReactDOM.render (
  <Content />,
  document.getElementById("app")
)
