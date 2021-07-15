import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Samurai X', 'Naruto', 'Hunter X Hunter'])

    const categoriesAdd = () => {
        setCategories(['Demon Slayer', ...categories])
    }

    return (
        <div className="container">
            <h1 className="p-2 m-0">GIF EXPERT</h1>
            <hr />
            <AddCategory setCategories={setCategories} />
            <button onClick={categoriesAdd} className="btn btn-sm btn-success">Agregar categoria</button>
            {
                categories.map((category) =>
                    <GifGrid key={category} category={category} />
                )
            }
        </div>
    )
}

export default GifExpertApp
