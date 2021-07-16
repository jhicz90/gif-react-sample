import React from 'react'
import { UseFetchGifs } from '../hooks/UseFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    const { data: images, loading } = UseFetchGifs(category)

    return (
        <div>
            <h3 className="animate__animated animate__fadeInUp">{category}</h3>
            {loading && <p className="animate__animated animate__fadeInUp">Cargando...</p>}
            <div className="row">
                {
                    images.map(img =>
                        <GifGridItem key={img.id} img={img} />
                    )
                }
            </div>
        </div>
    )
}
