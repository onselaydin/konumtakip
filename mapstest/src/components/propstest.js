import React, { Component } from 'react'

export default class propstest extends Component {
    state = {
        test:"Önsel Test",
        isVisible : false
    }
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          test:"Önsel Test",
    //          isVisible : false
    //     }
    // }
    onClickEvent(e){
        console.log(e.target); //Bu eventin nerde oluştuğu bilgisini alırız.
        console.log("Test");
        console.log(this);
    }
    render() {
        const {isVisible} = this.state;
        return (
            <div>
                <ul>
                    <li>isim : {this.props.name} </li>
                    <li>Departman : {this.props.department} </li>
                    <li>Maaş : {this.props.salary} </li>
                </ul>
                {
                    isVisible ? <p>{this.state.test}</p>
                    : null
                }

                <p onClick={this.onClickEvent.bind(this)}>Event testleri</p>
            </div>
        )
    }
}
