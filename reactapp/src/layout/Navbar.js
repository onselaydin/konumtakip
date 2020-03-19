import React, { Component } from 'react'
import {Link} from "react-router-dom" 


export default class Navbar extends Component {
    render() {
        return (
            <div>
       
                <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
                    <a href="/" className="navbar-brand">{this.props.title}</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-ite active"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-ite active"><Link to="/add" className="nav-link">Add User</Link></li>
                        <li className="nav-ite active"><Link to="/github" className="nav-link">Project Files</Link></li>
                    </ul>

                </nav>

                {/* <ol class="breadcrumb">
                    <li class="active"><Link to="/">Ana Sayfa&nbsp; </Link></li>
                    <li><Link to="/add"> / Add User&nbsp;</Link></li>
                    <li><Link to="/github"> / Project File</Link></li>
                </ol> */}
            </div>
        )
    }
}
