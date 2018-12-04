//Best Used for one of events-like hit this button to trigger an event
//IN this case hitting the button resets the counter to zero by sending the event to
//The mainComponent which sets state back to zero
class ButtonClick extends React.Component {
  //This is where i declare what functions will have events trigger them
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(event) {
    this.props.handler(event);
  }
  render() {
    //Seems like where I want to declare local variables
    const buttonStyle = {border: '1px solid red'};
    return (
      <div>
        <button
          style={buttonStyle}
          onClick={this.handleButtonClick}
          >This will trigger a button click event-In this case it will reset the counter to ZERO</button>
      </div>
    );
  }
}

//Where I'm displaying my text and passing down a prop
class DivTextWithCounter extends React.Component {
  render() {
    return (
      <div>
        Hey {this.props.name}, move mouse over here, you've been here {this.props.value} times
      </div>
    );
  }
}

//The parent of DivTextWithCounter-where mnouse over functionalirty occurs
class MouseOver extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleMouseOver(event) {
    console.log(event);
  }
  render() {
    const mouseOverStyle = {border: '1px solid blue'}
    return (
      <div>
        <div
          style={mouseOverStyle}
          onMouseOverCapture={((event)=>{
            console.log('mouse over on this capture event');
            console.dir(event, this)}).bind(this)}
          onMouseOver={this.props.handler}
          >
          <DivTextWithCounter
            value={this.props.value}
            name={this.props.name}
            />
        </div>
      </div>
    );
  }
}

class NameEntering extends React.Component {
  render() {
    let colorStyle={color:this.props.color};
    return (
      <div>
        <h3 style={colorStyle}>Who Are You?</h3>
        <input
          type='text'
          onChange={this.props.handleNameCapture}
          />
        <button
          onClick={this.props.handleNameVerification}>Submit Name!</button>
      </div>
    );
  }
}

//The parent where I initialize my app and store state
class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.handleNameVerification = this.handleNameVerification.bind(this);
    this.handleNameCapture = this.handleNameCapture.bind(this);
    this.state = {
      counter: 0,
      name: 'Default User',
      color: 'Yellow',
    }
  }
  handleMouseOver(event) {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  resetCounter(event) {
    this.setState({
      counter: 0,
    })
  }
  //When text is entered this updates the state
  handleNameCapture = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  handleNameVerification(event) {
    if (this.state.name.length > 2) {
      this.setState({
        color: "Green",
      })
      if (this.state.name.length > 6) {
        if (this.state.name.length > 10) {
          this.setState({
            color: "Purple",
          })
        }
      } else {
        this.setState({
          color: "Orange",
        })
      }
    }
  }
  render() {
    return (
      <div>
        <h3>Yao</h3>
        <div>
          <ButtonClick
            handler={this.resetCounter}/>
          <MouseOver
            handler={this.handleMouseOver}
            value={this.state.counter}
            name={this.state.name}/>
          <NameEntering
            handleNameVerification={this.handleNameVerification}
            handleNameCapture={this.handleNameCapture}
            color={this.state.color}
            />
        </div>
      </div>
    );
  }
}

////////////
///////////
////////////
///////////

class Button extends React.Component {
  render() {
    return(
      <button
        onClick={this.props.handleClick}>
        {this.props.name} has clicked me {this.props.value} times!
      </button>
    )
  }
}
class NameEntry extends React.Component {
  render() {
    const nameStyle = {color: "Green"};
    return (
      <div>
        <h3 style={nameStyle}>Who are you?</h3>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.handleName}>
        </input>
      </div>
    );
  }
}
//Parent Component
class ButtonCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleName = this.handleName.bind(this);
    this.state = {
      counter: 0,
      name: "Default User"
    }
  }
  handleClick(event) {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <Button
          handleClick={this.handleClick}
          value={this.state.counter}
          name={this.state.name}/>
        <NameEntry
          handleName={this.handleName}/>
      </div>
    );
  }
}

////////////
///////////////////////
///////////////////////
///////////
class DropDownList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.selectedNameForDisplay(event.target.value);
  }
  render() {
    return (
      <div>
        <select
          onChange={this.handleClick}>
          {this.props.namesList.map((names, index) => {
              return <option key={index} value={names}>{names}</option>;
            })
          }
        </select>
      </div>
    );
  }
}

class UserNameEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.state = {
      name: '',
    };
  }
  handleNameChange = (e) => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    })
  }
  handleNameSubmit(event) {
    console.log(this.state.name);
    this.props.handleNameAdding(this.state.name);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleNameChange}
          ></input>
        <button
          onClick={this.handleNameSubmit}>
          Add a name to the datalist
        </button>
      </div>
    );
  }
}
class NameDisplay extends React.Component {
  render() {
    const existingUser = this.props.nameToDisplay;
    console.log(existingUser);
    let welcome;

    if (existingUser) {
      welcome = <div><h3>Hello {existingUser}, welcome back!</h3></div>
    } else {
      welcome = <div><h3>Who Are You?</h3></div>
    }
    return (
      <div>
      {welcome}
      </div>
    )
  }
}

class PhoneEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handlePhoneAdding = this.handlePhoneAdding.bind(this);
    this.handlePhoneNumSubmit = this.handlePhoneNumSubmit.bind(this);
    this.state = {
      phoneNum: "",
    }
  }
  handlePhoneAdding = (e) => {
    this.setState({
      phoneNum: e.target.value
    });
    console.log(e.target.value)
  }
  handlePhoneNumSubmit(event) {
    this.props.handlePhoneAdding(this.state.phoneNum);
  }

  render() {
    return (
      <div>
        <h3>What is your phoneNum?</h3>
        <input
          type="text"
          onChange={this.handlePhoneAdding}
          ></input>
        <button
          onClick={this.handlePhoneNumSubmit}
          >Submit Your Phone Num</button>
      </div>
    );
  }
}


class DropDownNameList extends React.Component {
  state = {
    names: ["hank", "jimbo"],
    selected: "",
    phone: "",
  }
  constructor(props) {
    super(props);
    this.handleNameAdding = this.handleNameAdding.bind(this);
    this.selectedNameForDisplay = this.selectedNameForDisplay.bind(this);
    this.handlePhoneAdding = this.handlePhoneAdding.bind(this);
  }
  handleNameAdding(event) {
    console.log(event);
    console.log(this.state.names)
    const tempNames = this.state.names;
    tempNames.push(event);
    this.setState({
      names: tempNames.map((user) => {
        return user;
      })
    })
  }
  selectedNameForDisplay = (event) => {
    this.setState({
      selected: event
    })
  }
  handlePhoneAdding = (event) => {
    console.log(event);
    this.setState({
      phone: event
    })
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <NameDisplay
          nameToDisplay={this.state.selected}
          phoneNumToDipslay={this.state.phoneNum}/>
        <DropDownList
          namesList={this.state.names}
          selectedNameForDisplay={this.selectedNameForDisplay}/>
        <UserNameEntry
          handleNameAdding={this.handleNameAdding}/>
        <PhoneEntry
          handlePhoneAdding={this.handlePhoneAdding}/>
      </div>
    );
  }
}

////////
////////

////////
///////
///////


class WholeUserProfile extends React.Component {
  state = {
    name: "josh",
    phoneNum: '212',
    userprofile: [{
      name: "yao",
      greeting: "gung hey fat choi",
      }
    ],
  };

  render() {
    return(
      <div>
        <h3>Hello, These are the users:</h3>
        {this.state.name} <br></br>
        {this.state.phoneNum} <br></br>
      {this.state.userprofile.map((a, i) => {
        console.log(a.name);
        <div>
        <h3>{a.name}</h3>
        <li key={i}>{a.name}</li>
        </div>
      })}
      </div>
    );
  }
}
class TextFieldAndButton extends React.Component {
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder={"Enter Your " + this.props.fieldValue}
          onChange={this.props.handleFieldChange}></input>
        <button
          onClick={this.props.value}>
          Submit User Name
        </button>
      </div>
    );
  }
}

class EnterUserName extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: '',
      userName: '',
      phoneNum: '',
      address: '',
      password: ''
    };
  }
  handleFieldChange = (e) => {
    console.log(e.target.value);
    this.setState({
       name: e.target.value
    });
  }
  handleClick(event) {
    console.log(this.state.name)
  }
  render() {
    return (
      <div>
        <TextFieldAndButton
          fieldValue="Name"
          handleFieldChange={this.handleFieldChange}
          value={this.handleClick}/>
      </div>
    );
  }
}

class MakeMeAUser extends React.Component {
  render() {
    return (
      <div>
        <EnterUserName/>,
      </div>
    );
  }
}


ReactDOM.render(
  <MakeMeAUser/>,
  document.getElementById("app")
)
