import React, { Component } from "react";
import UserConsumer from "../context";
import axios from "axios";

export class UpdateUser extends Component {
  state = {
    name: "",
    department: "",
    salary: "",
    error: false
  };
  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const response = await axios.get(`http://localhost:3004/users/${id}`);
    const { name, salary, department } = response.data;
    this.setState({
      name: name,
      salary: salary,
      department: department
    });
  };

  updateUser = async (dispatch, e) => {
    //Aşağıdaki kod Sayfanın yinelenmesini engeller.
    e.preventDefault();
    const { name, salary, department } = this.state;
    const { id } = this.props.match.params;
    const updateUser = {
      name,
      salary,
      department
    };
    if (!this.validateForm()) {
      this.setState({
        error: true
      });
      return;
    }
    const response = await axios.put(
      `http://localhost:3004/users/${id}`,
      updateUser
    );
    dispatch({ type: "UPDATE_USER", payload: response.data });
    //Aşağıdaki kod Ana sayfaya yönlendiriyor.
    this.props.history.push("/");
  };

  validateForm = () => {
    const { name, salary, department } = this.state;
    if (name === "" || salary === "" || department === "") {
      return false;
    }
    return true;
  };

  changeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, salary, department,error } = this.state;
    return (
      <UserConsumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="card-header">
                  <h4>Update User Form</h4>
                  <div className="card-body">
                    {error ? (
                      <div className="alert alert-danger">
                        Lütfen alanları boş bırakmayınız.
                      </div>
                    ) : null}
                    <form onSubmit={this.updateUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="id"
                          placeholder="Enter Name"
                          className="form-control"
                          value={name}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input
                          type="text"
                          name="department"
                          id="department"
                          placeholder="Enter Department"
                          className="form-control"
                          value={department}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="salary">Salary</label>
                        <input
                          type="text"
                          name="salary"
                          id="salary"
                          placeholder="Enter Salary"
                          className="form-control"
                          value={salary}
                          onChange={this.changeInput}
                        />
                      </div>
                      <button
                        className="btn btn-success btn-block"
                        type="submit"
                      >
                        Update User
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default UpdateUser;
