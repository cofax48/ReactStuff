class Menu extends React.Component {
  render() {
    let menus = ['Home',
      'About',
      'Services',
      'Portfolio',
      'Contact Us'];
    return (
      <div>
        {menus.map((value, index) => {
          return <div key={index}><Link label={value}/></div>
        })}
      </div>
    );
  }
}

class Link extends React.Component {
  render() {
    const url='/'
    +this.props.label
      .toLowerCase()
      .trim()
      .replace(' ', '-'); //Defines a funcrtion that creates URL fragments out of menu names
    const styles = {
      color: 'red',
      fontSize: 20
    };
    return (
      <div>
        <div>
          <h1>
            <ToolTip hoverValue={this.props.label}>
              <a href={url}>{this.props.label}</a>
            </ToolTip>
          </h1>
        </div>
        <br/>
      </div>
    );
  }
}

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this)
    this.state = {
      opacity: false,
    }
  }
  toggle() {
    const toolTipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: toolTipNode.offsetTop,
      left: toolTipNode.offsetLeft,
    })
  }
  render () {
    const style = {
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 40,
      left: (this.state.left || 0) + 30,
      zIndex: (this.state.opacity) ? 1000 : -1000,
    }
    return (
      <div>
        <div style={{display: 'inline'}}>
          <span style={{color: 'blue'}}
            onMouseEnter={this.toggle}
            onMouseOut={this.toggle}>
            {this.props.children}
          </span>
          <div className="tooltip bottom"
            style={style}
            role="tooltip">
            <div className="tooltip-arrow"></div>
            <div className="tooltip-inner">
              {this.props.hoverValue}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class TimerWrapper extends React.Component {
  //sets initial states
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.pause = this.pause.bind(this);
    this.state = {
      timeLeft: null,
      timer: null,
      pauseTime: null,
      paused: false,
    }
  }
  pause(event) {
    console.log(this.state.timeLeft);
    if (!this.state.paused) {
      console.log(this.state.timeLeft);
      this.setState({
        pauseTime: this.state.timeLeft,
        paused: true,
        timeLeft: null,
      });
      clearInterval(this.state.timer);
    } else {
      console.log(this.state.timeLeft);
      this.setState({
        timeLeft: this.state.pauseTime,
      })
      this.startTimer(this.state.pauseTime)
    }
  };
  //triggers the new timer
  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      let timeLeft = this.state.timeLeft - 1;
      if (timeLeft == 0) {
        clearInterval(timer)
      };
      this.setState({
        timeLeft: timeLeft,
      })
    }, 1000)
    return this.setState({
      timeLeft: timeLeft,
      timer: timer,
    })
  };
  render() {
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group">
          <Button time="5" startTimer={this.startTimer}/>
          <Button time="10" startTimer={this.startTimer}/>
          <Button time="15" startTimer={this.startTimer}/>
          <Pause pause={this.pause}/>
        </div>
        <Timer timeLeft={this.state.timeLeft}/>
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    if (this.props.timeLeft == 0) {
      return (
        <div>
          <h1>Yo time is up Ma G</h1>
        </div>
      );
    } else {
    return (
        <div>
          <h1>This is how much time is left {this.props.timeLeft}</h1>
        </div>
      );}
  }
}

class Pause extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-success"
          onClick={this.props.pause}
          >Pause Me</button>
      </div>
    );
  }
}

class Button extends React.Component {
  //Tigers the new time(reset) from a user click. Call startTimer from Timer wrapper
  startTimer(event) {
    return this.props.startTimer(this.props.time);
  }
  render () {
    const style = {
      color: "blue"
    }
    return (
      <div>
        <button className="btn btn-primary"
          onClick={this.startTimer.bind(this)}>{/*Captures the this.props.time ("5/10/15")
            seconds as the id-the way to send a value through a function to the parent,
            when the startTimerhandler is declared before the render
            or could've done this: onClick={()=>{this.props.startTimer(this.props.time)}}    and not included the starTimer function*/}
          Start a timer for {this.props.time} seconds
        </button>
      </div>
    );
  }
}

class MasterComponent extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
        <TimerWrapper/>
      </div>
    )
  }
}
ReactDOM.render(
  <MasterComponent/>,
  document.getElementById("app")
)
