import React, { Component } from "react";
//import Users from "./Users";
import { PropTypes } from "prop-types";
import UserConsumer from "../context";
import axios from "axios";
import {Link} from "react-router-dom";

export class User extends Component {
  state = {
    isVisible: false
  };

  onDeleteUser = async (dispatch,e)=>{
    const {id} = this.props;
    //delete request ve template literal kullanımı.araya parametre almak
    await axios.delete(`http://localhost:3004/users/${id}`);

    //deleteUser(id);
    //Consumer dispect gelecek.
    dispatch({type :"DELETE_USER",payload:id});
  }

  onClickEvent = (e)=> {
  //onClickEvent(e) { //e parametresi herzaman sona konur. Önce kendi parametrelerimiz sonra e
      //console.log(e.target);
      //console.log("test");
      //console.log(this);
      //console.log(number);
      //this kendi yazdığımız metotda nereye işaret ediyor bilinmiyor.
      //onClick={this.onClickEvent.bind(this)} this i bind etmemiz lazım.
      //bir yöntemde arrow function kullanmaktır. Bind işlemini otomatik yapar.
      //sürekli arrow function kullanılması tavsiye edilir.
        this.setState({
            isVisible : !this.state.isVisible
        })
  }
  render() {
    const {id,name,department,salary}=this.props;  
    const { isVisible } = this.state;
    return (
        <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                     return (
                      <div className="col-md-8 mb-4">
                        <div className="card" style={isVisible ? {backgroundColor : "#ffaeaf",color:"white" } : null}>
                          <div className="card-header d-flex justify-content-between">
                            <h4 className="d-inline" onClick={this.onClickEvent.bind(this)}>
                                {name}
                            </h4>
                            <i onClick={this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                          </div>
                          {isVisible ? (
                            <div className="card-body">
                            <p className="card-text">Maaş : {salary}</p>
                            <p className="card-text">Departman : {department}</p>
                            <Link to={`edit/${id}`} className="btn btn-danger btn-block">Update User</Link>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                }
            }

        </UserConsumer>
    )

   
  }
}

User.propTypes={
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    //deleteUser: PropTypes.func.isRequired
}

export default User;