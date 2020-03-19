import React, { Component } from "react";
import User from "./User";
import UserConsumer from "../context";
//import {PropTypes} from "prop-types";

export class Users extends Component {
  render() {
     // const {users,deleteUser}=this.props;
    return (
      <UserConsumer>
        {
        value => {
          const { users } = value;
          return (
            <div>
              {
              users.map(user => {
                return (
                  <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    salary={user.salary}
                    department={user.department}
                    //deleteUser={deleteUser}
                  />
                );
              })
              }
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Users;
// Users.propTypes={
//     user: PropTypes.array.isRequired,
//     deleteUser: PropTypes.func.isRequired
// }