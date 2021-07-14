import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={inputValue}
                onChange={handleInputChange}
                className="form-control mb-3"
                type="text"
                placeholder="Nueva categoria...">
            </input>
        </form>
    )
}

export default AddCategory
