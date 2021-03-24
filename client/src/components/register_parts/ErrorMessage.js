import React from 'react'

/* 
    Basic error message component
*/

const ErrorMessage = (props) => {
    return (
        <div className="error-message">
            {props.error}
        </div>
    )
}

export default ErrorMessage