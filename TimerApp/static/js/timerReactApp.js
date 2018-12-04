class TimersDashboard extends React.Component {
  state = {
    timers: [
      {
        title: 'Practice pushups',
        project: 'balling hard',
        id: uuid.v4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      }, {
        title: 'Bake squash',
        project: 'Kitchening',
        id: uuid.v4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };
  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  handleTrashClick = (timerId) => {
        console.log(timerId);
    this.deleteTimer(timerId);
  };

  handleStartClick = (timerId) => {
    this.stopTimer(timerId);
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };

  deleteTimer = (timerId) => {
    console.log(timerId);
    this.setState({
      //method to delete item from list--filter through array, if timer does not equal the timerID it is returned
      //Array's filter method accepts a function that is used to test each element in the array.
      //It returns a new array containing all the elements that passed the test if the function
      //retruns true then the element is kept
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
  };

  startTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        };
      }),
    });
  };
  createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    //concat adds new element to array or adds a whole other array to new array
    this.setState({
      timers: this.state.timers.concat(t),
    });
  };
  //called when event is triggered by click in child
  updateTimer = (attrs) => {
    //sets state
    this.setState({
      // sets the timer to the returned result of looped timers already found in state
      timers: this.state.timers.map((timer) => {
        //if the id (found when looping) equals the attr id (which means its the timer to update)
        if (timer.id === attrs.id) {
          //a new object is returned where the timer's title and project are derived from the updated attributes version
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          }); //import to treat state as immutable
        } else {
          return timer;
        }
      }),
    });
  };
  render() {
    return(
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
            />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}/>
        </div>
      </div>
    );
  }
}

class EditableTimerList extends React.Component {
  render() {
    const timer = this.props.timers.map((timer) => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
        onStartClick={this.props.onStartClick}
        onStopClick={this.props.onStopClick}
        />
    ));
    return (
      <div id='timers'>
        {timer}
      </div>
    );
  }
}

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  };
  handleEditClick = () => {
    this.openForm();
  }
  handleFormClose = () => {
    this.closeForm();
  };
  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };
  closeForm = () => {
    this.setState({ editFormOpen: false });
  };
  openForm = () => {
    this.setState({ editFormOpen: true });
  };
  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}/>
      );
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
          onStartClick={this.props.onStartClick}
          onStopClick={this.props.onStopClick}
        />
      );
    }
  }
}

class TimerForm extends React.Component {
  state = {
    // || means do the first thing if it's true otherwise do the second thing
    title: this.props.title || '',
    project: this.props.project || '',
  }
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handleProjectChange = (e) => {
    this.setState({ project: e.target.value });
  };
  handleSubmit = () => {
    console.log(this.state.title)
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project,
    });
  };
  render() {
    const submitText = this.props.id ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input type='text'
                value={this.state.title}
                onChange={this.handleTitleChange}/>
            </div>
            <div className='field'>
              <label>Project</label>
              <input type='text'
                value={this.state.project}
                onChange={this.handleProjectChange}/>
            </div>
            <div className='ui two bottom attached buttons'>
              <button
                className='ui basic blue button'
                onClick={this.handleSubmit}>
                {submitText}
              </button>
              <button
                className='ui basic red button'
                onClick={this.props.onFormClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false,
  };
  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };
  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (timer) => {
    console.log(timer);
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}/>
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon'
            onClick={this.handleFormOpen}>
            <i className='plus icon'/>
          </button>
        </div>
      )
    }
  }
}

class Timer extends React.Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50)
  }
  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }
  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };
  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };
  handleTrashClick = () => {
    console.log(this.props.id);
    this.props.onTrashClick(this.props.id);
  };
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
          </div>
          <div className='center aligned description'>
            <h2>
              {elapsedString}
            </h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'
              onClick={this.props.onEditClick}
              >
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon'
              onClick={this.handleTrashClick}>
              <i className='trash icon' />
            </span>
          </div>
        </div>
        {/*the !! refers to making the this.props.runningSince truthy, if the prop is there-!! will be true if notn it will be false */}
        <TimerActionButton
          timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
          />
      </div>
    );
  }
}

class TimerActionButton extends React.Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <div
          className='ui bottom attached red basic button'
          onClick={this.props.onStopClick}>
          Stop
        </div>
      );
    } else {
      return (
        <div
          className='ui bottom attached green basic button'
          onClick={this.props.onStartClick}>
          Start
        </div>
      );
    }
  }
}


ReactDOM.render(
  <TimersDashboard/>,
  document.getElementById("content")
)
