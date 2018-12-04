import React from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = class extends React.Component {
  //This means the component has a static property displayName. When a property
  // is static that means it is a class property (instead of an instance property)
  static displayName = "01-basic-button";

  state = {
    name: '',
    names: [],
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

  onFormSubmit = (evt) => {
    //combines the this.state.names list and the this.state.name value
    const names = [...this.state.names, this.state.name ];
    this.setState({ names: names, name: '' });
    evt.preventDefault();
  };

  render() {
    return(
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
            placeholder="Name"
            value={this.state.name}
            onChange={this.onNameChange}
          />

          <input type='submit' />
        </form>
      </div>
      <div>
        <h3>Name</h3>
        <ul>
          {this.state.names.map((name, i) => <li key={i}>{name}</li>)}
        </ul>
      </div>
    </div>
    );
  }
}
