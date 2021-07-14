import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Samurai X', 'Naruto', 'Hunter X Hunter'])

    const categoriesAdd = () => {
        setCategories(['Demon Slayer', ...categories])
    }

    return (
        <div className="container">
            <h1 className="p-2 m-0">GIF EXPERT</h1>
            <hr />
            <AddCategory />
            <button onClick={categoriesAdd} className="btn btn-sm btn-success">Agregar categoria</button>
            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
