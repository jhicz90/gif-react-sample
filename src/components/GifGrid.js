import React from 'react'
import { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Naruto&limit=10&api_key=xeU3S2iRS5HDNBMygavk3IHqn9BENMQS'
        const resp = await fetch(url)
        const { data } = await resp.json()

        const gifs = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized.url
            }
        })
    }

    return (
        <div>
            <h3>{category}</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} className="btn btn-sm btn-primary">+1</button>
        </div>
    )
}
