import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import Users from "./components/Users";
// import AddUser from './components/AddUser';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./forms/AddUser";
import UpdateUser from "./forms/UpdateUser";
import NotFound from "./pages/NotFound";
import Contribute from "./pages/Contribute";

const Home = () => {
  return <h3> Ana Sayfa </h3>;
};
const About = () => {
  return <h3> About page </h3>;
};

export class App extends Component {
  // deleteUser= (id) => {
  //   this.setState({
  //     users: this.state.users.filter(user=>id!==user.id)
  //   })
  // }
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar title="User App" />
          <hr />
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/github" component={Contribute} />
            <Route exact path="/edit/:id" component={UpdateUser} />
            <Route component = {NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
