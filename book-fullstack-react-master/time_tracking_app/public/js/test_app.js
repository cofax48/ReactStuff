class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <SubComponent1/>
        <div>
          <h2>Hello From parent</h2>
        </div>
      </div>
    )
  }
}

class SubComponent1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello from subcomponent1</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <ParentComponent/>,
  document.getElementById("content")
)
