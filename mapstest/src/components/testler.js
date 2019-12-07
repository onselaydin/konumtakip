import React, { Component } from 'react'

export default class testler extends Component {
    render() {
        const degisken = 24;
        const isAuth = true;
        return (
            <div>
                <h4>{2+2}</h4>
                <h4 style={{color:"blue",fontSize:"30px"}}>{"onsel".toUpperCase()}</h4>
                <h4>{degisken}</h4>
                <div>
                    {
                        isAuth ? <p>Kullanıcı Kayıtlı</p>
                        : null
                    }
                </div>
            </div>
        )
    }
}
