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
