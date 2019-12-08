import React, { Component } from 'react'

export default class propstest extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>isim : {this.props.name} </li>
                    <li>Departman : {this.props.department} </li>
                    <li>Maaş : {this.props.salary} </li>
                </ul>
            </div>
        )
    }
}
