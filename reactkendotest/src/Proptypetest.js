import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default class Proptypetest extends Component {
    render() {
        return (
            <div>
                <h3>
                <i className="fas fa-trash-alt"></i>
                <FontAwesomeIcon icon={faTrashAlt} />
                    {this.props.title}</h3>
            </div>
        )
    }
}
Proptypetest.propTypes = {
    title: PropTypes.string.isRequired
}

Proptypetest.defaultProps = {
    title:"Default Değer"
}