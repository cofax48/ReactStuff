class TimersDashboard extends React.Component {
  render() {
    return (
      <div className='col-lg-1 col-centered'>
        <div className='column'>
          <EditableTimerList />
          <ToggleableTimerForm
            isOpen={true}/>
        </div>
      </div>
    );
  }
}

class EditableTimerList extends React.Component {
  render() {
    return (
      <div id='timers'>
        <EditableTimer
          title='Learn React'
          project="Web Domination"
          elapsed="89378234"
          runningSince={null}
          editFormOpen={false}/>
        <EditableTimer
          title='Learn extreme Ironing'
          project="World Domination"
          elapsed="345643"
          runningSince={null}
          editFormOpen={true}
        />
      </div>
    );
  }
}

class EditableTimer extends React.Component {
  render () {
    if (this.props.editFormOpen) {
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
        />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }
  }
}

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input type="text" defaultValue={this.props.title} />
            </div>
            <div className="field">
              <label>Project</label>
              <input type="text" defaultValue={this.props.project}/>
            </div>
            <div className="ui two bottom attached buttons">
              <button className='ui basic blue button'>
                {submitText}
              </button>
              <button className='ui basic red button'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



ReactDOM.render(
  <TimersDashboard/>,
  document.getElementById("app")
)
