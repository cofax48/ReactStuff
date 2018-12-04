class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this); //Binds the "this" context to the class to use "this" in the event handler to refer to this class
  }
  handleSave(event) {
    console.log(this, event);
  }
  render() {
    return (
      <div style={{border: '1px solid red'}}
        onMouseOver={((event) => {
          console.log('mouse is over')
        console.dir(event, this)}).bind(this)}
        onMouseOverCapture={((event) =>{
          console.log('mouse over on bubbling event')
          console.dir(event, this)
        }).bind(this)}>
      <button onClick={this.handleSave.bind(this)}>Save</button>
      </div>
    );
  }
}
ReactDOM.render(
  <SaveButton />,
  document.getElementById("app")
)
