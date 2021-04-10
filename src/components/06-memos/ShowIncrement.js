import React from 'react'
import PropTypes from 'prop-types';


export const ShowIncrement = React.memo(({ increment }) => {

    console.log(' Me volvi a generar :( ')

    return (
        <button
            className="btn btn-primary"
            onClick= { () =>{
                increment( 1 )
            }}
        >
            Incrementar
        </button>
    )
})


ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}