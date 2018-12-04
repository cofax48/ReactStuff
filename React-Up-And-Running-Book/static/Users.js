class Users extends React.Component {
  constructor(props) {
    super(props);
    //Initializes 'users' state with an empty array
    this.state = {
      users: [],
    }
  }
  componentDidMount() {
    //Performs a GET request using the url from the property to fetch user data
    fetch(this.props['data-url'])
      .then((response)=>.json())
      .then((users)=>this.setState({users: users})) //Retrieves user info from the response and assigns it to the state
  }
  render() {
    return (
      <div className="container">
        <h1>List of Users</h1>
        <table className="table-striped table-condensed table table-bordered table-hover">
          {/*Iterates over users state to create table rows*/}
          <tbody>{this.state.users.map((user)=> {
              <tr key={user.id}>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.ip_address}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
