import React from 'react'
import ErrorMessage from './ErrorMessage'

const ErrorBox = (props) => {
    return (
        <div>
            {(props.errors) ? props.errors.map(error => <ErrorMessage error={error} />) : ""}
        </div>
    )
}

export default ErrorBox