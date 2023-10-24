import React from 'react'

function Product(props) {
    return (
        <>
            <div className="card col-md-4 mx-4 mb-2" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.desc}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </>
    )
}

export default Product
