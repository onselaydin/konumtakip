import React from 'react'
import PropTypes from 'prop-types';

export default function proptipleri(props) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
proptipleri.protoTypes = {
    title : PropTypes.string.isRequired
}

proptipleri.defaultProps = {
    title : "Ege App"
}