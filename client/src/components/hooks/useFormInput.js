import {useState} from 'react'

/* 
    Basic hook for form inputs.
    Used a lot so made as cuustom hook.
*/

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return {value, onChange: handleChange,}
}

export default useFormInput