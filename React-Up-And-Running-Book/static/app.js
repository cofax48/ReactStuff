class SuperMasterComponent extends React.Component {
  render () {
    return (
      <div>
        <clock />
        <MasterComponent />
    );
  }
}

class Clock extends React.Component {
  //must be named constructor
  constructor(props){
    //If creating a constructor-always gotta invoke super
    super(props)
    this.launchClock()
    this.state = {
      currentTime: (new Date()).toLocaleTimeString()
      locations: [
        'nyc',
        'Los angeles',
        'Denver'
      ]
    }
  }
  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: (new Date()).toLocaleTimeString()
      })
    }, 1000)
  }
  render() {
    console.log('rendering clock')
    return (
      <div>{this.state.currentTime}</div>
    );
  }
}


class MasterComponent extends React.Component {
  render() {
    return (
      <div id="parent">
        <h1>Hello World again!</h1>
        <IfandElse/>
        <HelloWorld
          id="ember"
          frameWorkName="Ember"
          embStuff="This is Ember Stuff"
          />
        <MoreHellos
          id="Angular"
          frameWorkName="Angular"
          />
        <HelloWorld
          id="react"
          frameWorkName="Reaction"
          />
        <HelloWorld
          id="react"
          frameWorkName="Kenneth Cole Reaction"
          />
      </div>
    );
  }
}
/*
When using if/else in js its best to use a ternary operator '?':
-to do so define the variable outside of jsx (before return) and printed with {} in jsx
-Expression (function that returnas a value) defined outside of JSX (before return) and invoked in {} in jsx
-conditional ternary operator
-immediately invoked expression (like the ternary oeprator ?)

-use if/else outside of JSX (before return) to generate a variable that you'll print in JSX with {}. Or skip the variable and print the results of (?) uysing {} in JSX
*/

class IfandElse extends React.Component {
  render() {
    let sessionFlag = 'This string makes the sessionflag truthy'
    return (
      <div>
        <a href={(sessionFlag) ? '/logout':'/login'}>
          {(sessionFlag) ? 'Logout':'Login'}
        </a>
      </div>
    );
  }
}

/*
class IfandElseTwo extends React.Component {
  render() {
    let sessionFlag = 'This string makes the sessionflag truthy'
    (sessionFlag) ? return <div><a href='/logout'>Logout</a></div> : return <div><a href='/login'>Login</a></div>
  }
}
*/

class HelloWorld extends React.Component {
  getUrl() {
    return 'http://quantpolitik.com'
  }
  outPutAString() {
    return 'this is my favorite string'
  }
  render() {
    return (
      <div>
      <h1 {...this.properties}>What's gucci {this.props.frameWorkName}?</h1>
      <div>{/*This is a COMMENT*/}</div>
      <SubHello
        frameWorkName={this.props.frameWorkName}
        embStuff={this.props.embStuff}
        />
      <h2>My rest api is: <a href={this.getUrl()}>{this.getUrl()}</a></h2>
      <h3>{this.outPutAString()}</h3>
      </div>
    );
  }
}

let now = new Date(Date.now()).toLocaleTimeString();

class SubHello extends React.Component {
  render() {
    let andNow = new Date(Date.now()).toLocaleTimeString();
    return (
      <div>
      <h2>Hey I'm a sub-component of {this.props.frameWorkName}</h2>
      <h3>Hey I'm a Sub prop with {this.props.embStuff}</h3>
      <h1>Current time is {now} and {andNow}</h1>
      <h3>Also {new Date(Date.now()).toLocaleTimeString()}</h3>
      </div>
    );
  }
}

class MoreHellos extends React.Component {
  render() {
    return (
      <h1>Even More Hellos from {this.props.frameWorkName}!</h1>
    );
  }
}

/*

import PropTypes from 'prop-types';

class InputFields extends React.Component {
  state = {
    fields: {
      name: '',
      email: '',
      age: '',
      },
    fieldErrors: {},
    people: [],
  };

  onGreatClick = (evt) => {
    console.log('a great event has occurred', evt);
  };

  onExcellentClick = (evt) => {
    console.log('an incredible event has occcured');
  };
  onButtonClick = (evt) => {
    const btn = evt.target;
    console.log('The user clicked', btn.name, ' : ', btn.value);
    if (btn.name === 'button-1') {
      console.log('yay')
    };
  };

  onNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  };

  //to verify that the data types are what they should be
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropType.func,
    onChange: PropTypes.func.isRequired,
  };

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  }

  isEmail = (email) => {
    console.log(email);
    let notEmail = 0;
    if (!String(email).includes("@")) notEmail++;
    if (!String(email).includes(".")) notEmail++;
    console.log(notEmail);
    if (notEmail > 0) return false;
    else return true;
  }

  validate = (person) => {
    const errors = {};
    //(!person.name) means it is falsy or there's nothing there
    if (!person.name) errors.name = 'Name Required';
    if (!person.email) errors.email = 'Email Required';
    if (this.isEmail(person.email) === false) errors.email = 'Invalid Email';
    return errors;
  }

  onFormSubmit = (evt) => {
    //combines the this.state.names list and the this.state.name value
    const people = [...this.state.people ];
    const person = this.state.fields;
    const fieldErrors = this.validate(person);
    this.setState({ fieldErrors });
    evt.preventDefault();

    //if there is any length to the field errors-aka that there are errors then it won't change the state
    if (Object.keys(fieldErrors).length) return;

    this.setState({
      people: people.concat(person),
      fields: {
        name:'',
        email: '',
        age: '',
      }});
  };

  render () {
    return (
      <div>
        <div>
          <h1>
            What do you think of React?
          </h1>

          <button
            name='button-1'
            value='great'
            onClick={this.onButtonClick}
          >Great!</button>

        <button
          name='button-2'
          value='excellent'
          onClick={this.onButtonClick}
        >Amazing</button>
        </div>


        <div id="form">
          <h1>Sign up Sheet</h1>
            <form onSubmit={this.onFormSubmit}>
              <input
                placeholder='Name'
                name='name'
                value={this.state.fields.name}
                onChange={this.onInputChange}
                />

              <input
                placeholder='Email'
                name='email'
                value={this.state.fields.email}
                onChange={this.onInputChange}
                />

              <span style={{ color: 'red' }}>{this.state.fieldErrors.name}</span>

              <br/>

              <input
                placeholder='age'
                name='age'
                value={this.state.fields.age}
                onChange={this.onInputChange}
                />

              <span style={{ colord:'red' }}>{this.state.fieldErrors.email}</span>
              <br/>
              <input type='submit'/>
            </form>

            <div>
              <h3>People</h3>
              <ul>{
                  this.state.people.map(({ name, email, age }, i) =>
                    <li key={i}>Name: {name}, Email: { email }, Age: {age}</li>
                )}
              </ul>
            </div>
        </div>
      </div>
    );
  }
}
*/
ReactDOM.render(
  <SuperMasterComponent />,
  document.getElementById("app")
);
