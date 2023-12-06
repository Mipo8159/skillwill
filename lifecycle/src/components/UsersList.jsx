import { Component } from "react";
import UserItem from "./UserItem";

class UsersList extends Component {
  constructor(props) {
    super(props);

    console.log("Constructor log");
    this.state = {
      show: true,
      inputValue: "",
      todoId: 1,
      error: null,
      users: [
        { id: 1, name: "Giga" },
        { id: 2, name: "Gigi" },
      ],
    };
    // this.onChange = this.onChange.bind(this)
  }

  static getDerivedStateFromError(error) {
    return {
      error: error.message,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Derived state log");
    return {
      name: "Aragorn",
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.todoId}`)
      .then((data) => data.json())
      .then((res) => console.log(res));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.todoId !== prevState.todoId) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.todoId}`)
        .then((data) => data.json())
        .then((res) => console.log(res));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(
      this.state.show == nextState.show &&
      this.state.users == nextState.users &&
      this.state.todiId == nextState.todoId
    );
  }

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      inputValue: value,
    });
  };

  addUser = (event) => {
    event.preventDefault();

    const user = {
      id: this.state.users.length + 1,
      name: this.state.inputValue,
    };

    this.setState({
      users: [...this.state.users, user],
      inputValue: "",
    });
  };

  removeUser = (id) => {
    const users = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users,
    });
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
  };

  open = () => {
    this.setState({ show: true });
  };

  nextTodo = () => {
    this.setState((prevState) => {
      return {
        todoId: prevState.todoId + 1,
      };
    });
  };

  render() {
    console.log("Render log", this.state);
    return (
      <div className="users">
        <form onSubmit={this.addUser} className="user-form">
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
          <button type="submit">Add User</button>
        </form>

        <button onClick={this.toggle}>Toggle</button>
        <button onClick={this.open}>Open</button>
        <button onClick={this.nextTodo}>Next ToDo</button>

        {this.state.show &&
          this.state.users.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              action={this.removeUser}
            />
          ))}
      </div>
    );
  }
}

export default UsersList;
