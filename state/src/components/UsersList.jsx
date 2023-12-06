import { Component } from "react";
import UserItem from "./UserItem";

class UsersList extends Component {
  state = {
    inputValue: "",
    users: [
      { id: 1, name: "Giga" },
      { id: 2, name: "Gigi" },
    ],
  };

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

  render() {
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

        {this.state.users.map((user) => (
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
