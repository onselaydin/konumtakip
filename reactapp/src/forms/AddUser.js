import React, { Component } from "react";
import posed from "react-pose";
//import uid from "uniqid";
import UserConsumer from "../context";
//var id = require('uniqid');
import axios from "axios";

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block"
    }
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none"
    }
  }
});

export class AddUser extends Component {
  state = {
    visible: true,
    name: "",
    department: "",
    salary: "",
    error: false //validation için kullanıyoruz.
  };

  validateForm = () => {
    const { name, salary, department } = this.state;
    if (name === "" || salary === "" || department === "") {
      return false;
    }
    return true;
  };

  changeVisibility = e => {
    this.setState({
      visible: !this.state.visible
    });
  };

  addUser = async (dispatch, e) => {
    //Sayfanın yinelenmesini engellemek.
    e.preventDefault();
    console.log("Kaydet çalıştı");
    const { name, department, salary } = this.state;
    //Bir obje oluşturduk ve state deki deperleri atadık. state ile değişken isimleri aynı ise name:name gibi yazmana gerek yok. name,salary,depatmanet şeklinde yazabiliriz.
    const newUser = {
      //id: uid(),
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
    //console.log(newUser);
    const response = await axios.post("http://localhost:3004/users", newUser);

    dispatch({ type: "ADD_USER", payload: response.data });
    this.clearTextboxs();
    //Aşağıdaki kod Ana sayfaya yönlendiriyor.
    this.props.history.push("/");
  };

  clearTextboxs = e => {
    this.setState({
      name: "",
      salary: "",
      department: ""
    });
  };

  editUser = e => {};

  //tüm inputlara change fonk. yazmadan tek fonksiyon ile yaptık.
  changeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //   changeName = e => {this.setState({
  //       name:e.target.value
  //   })};
  //   changeDepartment = e => {this.setState({
  //       department:e.target.value
  //   })};
  //   changeSalary = e => {this.setState({
  //       salary:e.target.value
  //   })};
  render() {
    const { visible, name, salary, department, error } = this.state;
    return (
      <UserConsumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <button
                onClick={this.changeVisibility}
                className="btn btn-dark btn-block mb-2"
              >
                {visible ? "Hide Form" : "Show Form"}
              </button>
              <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>Add User Form</h4>
                    <div className="card-body">
                      {
                        error ? 
                        <div className="alert alert-danger">
                            Lütfen alanları boş bırakmayınız.
                        </div>
                        : null

                      }
                      <form onSubmit={this.addUser.bind(this, dispatch)}>
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
                          className="btn btn-danger btn-block"
                          type="submit"
                        >
                          Add User
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
