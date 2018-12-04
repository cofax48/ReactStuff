class FormParent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectChangeEvent = this.handleSelectChangeEvent.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleButtonSelect = this.handleButtonSelect.bind(this);

    this.state = {
      selectedValue: 'python',
      name: '',
      email: '',
      buttonPushed: false,
      validEmail: false,
    }
  }
  handleSelectChangeEvent(event) {
    this.setState({
      selectedValue: event.target.value,
    });
  }
  handleEmail(event) {
    let emailToUse = String(event.target.value);
    this.confirmEmailValid(emailToUse);
  }
  confirmEmailValid(emailToUse) {
    if (emailToUse.includes('@')) {
      if (emailToUse.includes('.')) {
        this.emailValid(emailToUse)
      };
    };
  }
  emailValid(validEmail) {
    this.setState({
      email: validEmail,
      validEmail: true,
    });
  }
  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleButtonSelect(event) {
    console.log(this.state.selectedValue);
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.validEmail);
    if (this.state.validEmail === true) {
      this.setState({
        buttonPushed: true,
      });
      fetch('/api', {method: 'POST', body:
        JSON.stringify(this.state)})
        .then((response)=>{return response.json()})
        .then((data)=>{console.log('Submitted: ', data)});
    }
  }


  render() {
    if (this.state.buttonPushed === false) {
      return (
        <div>
          <ValueSelect
            value={this.state.selectedValue}
            handler={this.handleSelectChangeEvent}/>
          <NameEntry
            handler={this.handleName}/>
          <EmailEntry
            handler={this.handleEmail}/>
          <ButtonSelector
            handler={this.handleButtonSelect}/>
        </div>
      );
    } else {
      if (this.state.validEmail === true){
        return (
          <div>
            <ValueSelect
              value={this.state.selectedValue}
              handler={this.handleSelectChangeEvent}/>
            <NameEntry
              handler={this.handleName}/>
            <EmailEntry
              handler={this.handleEmail}/>
            <ButtonSelector
              handler={this.handleButtonSelect}/>
            <InfoDisplay
              fave={this.state.selectedValue}
              name={this.state.name}
              email={this.state.email}/>
          </div>
        );
      } else {
        return (
          <div>
            <ValueSelect
              value={this.state.selectedValue}
              handler={this.handleSelectChangeEvent}/>
            <NameEntry
              handler={this.handleName}/>
            <EmailEntry
              handler={this.handleEmail}/>
            <InvalidEmail/>
            <ButtonSelector
              handler={this.handleButtonSelect}/>
          </div>
        );
      }
    }
  }
}

class ValueSelect extends React.Component {
  render() {
    return (
      <div>
        <form>
          <select
            value={this.props.value}
            onChange={this.props.handler}>
            <option value="ruby">Ruby</option>
            <option value="node">Node</option>
            <option value="python">Python</option>
          </select>
        </form>
      </div>
    );
  }
}

class NameEntry extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.props.handler}
          placeholder="What's you name"/>
      </div>
    );
  }
}

class EmailEntry extends React.Component {
  render () {
    return (
      <div>
        <input
          type="text"
          onChange={this.props.handler}
          placeholder="What's your email?"/>
      </div>
    );
  }
}

class ButtonSelector extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={this.props.handler}>Submit Yo Infomation!
        </button>
      </div>
    );
  }
}

class InfoDisplay extends React.Component {
  render() {
    return (
      <div>
        <p>Fave Thang: {this.props.fave}</p>
        <p>Name: {this.props.name}</p>
        <p>Email: {this.props.email}</p>
      </div>
    );
  }
}

class InvalidEmail extends React.Component {
  render () {
    return (
      <div style="color:red">
        <p>Invalid Email!</p>
      </div>
    );
  }
}

/*
class FormSubmitting extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectChangeEvent = this.handleSelectChangeEvent.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      selectedValue: 'node',
      email: '',
    }
  }
  handleSelectChangeEvent(event) {
    this.setState({selectedValue: event.target.value})
  }
  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  handleButtonClick(event) {
    console.log(this.state.email);
    console.log(this.state.selectedValue);
  }
  render () {
    return (
      <div>
        <form>
          <select
            value={this.state.selectedValue}
            onChange={this.handleSelectChangeEvent}>
            <option value="ruby">Ruby</option>
            <option value="node">Node</option>
            <option value="python">Python</option>
          </select>
        </form>
        <input
          type="text"
          onChange={this.handleEmail}
          defaultValue="Cofax48"/>
        <button
          className="btn btn-primary"
          onClick={this.handleButtonClick}>Submit Email</button>
      </div>
    );
  }
}

class FormSubmitting extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.state = {
      name: '',
      email: '',
      radioGroup: {
        angular: false,
        react: true,
        ember: false,
      },
      checkBoxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false,
      }
    }
  }
  handleCheckBox(event) {
    let obj = Object.assign(this.state.checkBoxGroup);
    obj[event.target.value] = event.target.checked; // true or false
    this.setState({
      checkBoxGroup: obj,
    })
  }
  handleRadio(event) {
    let obj = {}; //erase other radios
    obj[event.target.value] = event.target.checked //true //Uses a target.checked attribute to get a boolean that indicates whther this radio button is selecxted
    this.setState({
      radioGroup: obj,
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type="radio"
            name="radioGroup"
            value="angular"
            checked={this.state.radioGroup['angular']}
            onChange={this.handleRadio}/> Angular
          <br></br>
          <input type="radio"
            name="radioGroup"
            value="react"
            checked={this.state.radioGroup['react']}
            onChange={this.handleRadio}/> React
          <br></br>
          <input type="radio"
            name="radioGroup"
            value="ember"
            checked={this.state.radioGroup['ember']}
            onChange={this.handleRadio}/> Ember
          <br></br>
        </form>
        <form>
          <input type="checkbox"
            name="checkBoxGroup"
            value="node"
            checked={this.state.checkBoxGroup['node'] /*Uses state as a value. It can be an attribute of an object or just a state attribute*}
            onChange={this.handleCheckBox}/>Node
          <br></br>
          <input type="checkBox"
            name="checkBoxGroup"
            value="react"
            checked={this.state.checkBoxGroup['react']}
            onChange={this.handleCheckBox /*Uses onChange to capture actions *}/>React
          <br></br>
          <input type="checkbox"
            name="checkBoxGroup"
            value="express"
            checked={this.state.checkBoxGroup.express /*Uses dot notation when keys are valid js names*}
            onChange={this.handleCheckBox}/>Express
          <br></br>
          <input type="checkbox"
            name="checkBoxGroup"
            value="mongodb"
            checked={this.state.checkBoxGroup['mongodb']}
            onChange={this.handleCheckBox}/>MondoDB
          <br></br>
        </form>
      </div>
    );
  }
}

*/
ReactDOM.render(
  <FormParent/>,
  document.getElementById("app")
)
