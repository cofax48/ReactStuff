import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const arr = [1,2,3,4,10,5,6];

arr.map(function(num, index) {
  return (console.log(num, index));
});

arr.map(
  (num, index) => {
    console.log(num, index)
  });


//BindingsToComponent
class App extends Component {
  onClickMe = () => {
    console.log(this.name);
  }
  render () {
    return (
      <div>
      <h1>Hello World</h1>
      <button
        name="jooooosh"
        onClick={this.onClickMe}
        type="button">Click Me</button>
      </div>
    );
  }
}

/*

const list = [
  {
    title: 'React',
    url: 'facebook.com',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'redux.com',
    author: "Dan abramov",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
    };

    this.onDismiss = this.onDismiss.bind(this);

  }

  onClickMe = () => {
    console.log(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList})
  }

  render() {
    const yao = 'yaooooo whats gucci ya diggg';


    class Developer {
      constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
      }
      getName() {
        return this.firstname + ' ' + this.lastname;
      }
    }

    const josh = new Developer('Josh', 'Woods');
    console.log(josh.getName());

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <span>{yao}</span><br></br>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.list.map(item => {
          return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
              <br></br>
              <br></br>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button">Dismiss</button>
            </span>
            </div>
          );
        })}

        {list.map(item => {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              </div>
          )
        })}

        {list.map(({ url, title, author, num_comments, points }, i) =>
        <li key={i}>
                  <div>
                      <span>
                        <a href={url} >title: {title} </a>
                      </span>
                      <span>author: {author} </span>
                      <span>num_comments: {num_comments} </span>
                      <span>points: {points} </span>
                      </div>
                    </li>)}

                    <br>
                    </br>
                    <br></br>
        {list.map(function(item) {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              </div>

          );})}

      </div>
    );
  }
}


*/
export default App;
