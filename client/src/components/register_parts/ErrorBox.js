import React from 'react'
import ErrorMessage from './ErrorMessage'

/* 
    Container for all the error messages when failing to register.
*/

const ErrorBox = (props) => {
    return (
        <div>
            {(props.errors) ? props.errors.map((error, index)=> <ErrorMessage key={index} error={error} />) : ""}
        </div>
    )
}

export default ErrorBox