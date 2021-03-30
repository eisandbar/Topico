import React from 'react'

/* 
    Basic error message component
*/

const ErrorMessage = (props) => {
    return (
        <div className="errors is-size-5">
            {props.error}
        </div>
    )
}

export default ErrorMessage