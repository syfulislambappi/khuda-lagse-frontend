import React from 'react'
import { useHistory } from 'react-router'

const CompleteOrder = () => {
    const history = useHistory('/')
    const imageUrl = `https://image.freepik.com/free-vector/delivery-man-with-boxes-car-gives-package-client-parcel-carton-courier-person-postman-transport-express_1284-41994.jpg`
    return (
        <div className="my-5 text-center">
            <h1 className="text-center mb-4">Your Order is arriving at you within 30 minutes.</h1>
            <div className="mx-auto w-25">
                <img className="img-fluid" src={imageUrl} alt="delivery" />
            </div>
            <button onClick={() => history.push('/items')} className="btn btn-warning my-4">Order More</button>
        </div>
    )
}

export default CompleteOrder
