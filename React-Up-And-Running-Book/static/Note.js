class Note extends React.Component {
  confirmLeave(e) {
    let confirmationMessage = 'Do you really want to close?';
    e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    return confirmationMessage; // Gecko, WebKit, Chrome <34
  }
  componentDidMount() {
    console.log('Attaching confirmLeave event listener for beforeunload');
    window.addEventListener('beforeunload', this.confirmLeave);
  }
  componentWillUnmount() {
    console.log('Removing confirmLeave event listener for beforeunload');
    window.removeEventListener('beforeunload', this.confirmLeave);
  }
  
  render() {
    console.log('Render');
    return (
      <div>
        here will be our input field for notes, parent will rmeove in {this.props.secondsLeft} seconds
      </div>
    );
  }
}

ReactDOM.render(
  <Note />,
  document.getElementById("app")
)
