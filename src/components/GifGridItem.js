import React from 'react'

export const GifGridItem = ({ img }) => {

    return (
        <div className="col-3">
            <div className="card mb-3 me-1">
                <img src={img.url} className="card-img-top" alt={img.title}></img>
                <div className="card-body">
                    <div className="card-title text-capitalize fs-6">{img.title}</div>
                </div>
            </div>
        </div>
    )
}
