import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ManageOrder from '../ManageOrder/ManageOrder'

const ManageOrders = () => {
    const [orders, setOrders] = React.useState([])
    
    useEffect(() => {
        fetch(`https://khuda-lagse-backend.herokuapp.com/ordered`)
            .then(res => res.json())
            .then(data => setOrders(data))
    },[orders])
    return (
        <div className="my-6">
            <h1 className="text-center my-5">My Orders</h1>
            <Container className="my-5">
            <table className="table table-warning table-bordered">
                <thead className="table-dark">
                    <tr className="text-center">
                        <th>User Name</th>
                        <th>Order Name</th>
                        <th>Order Price</th>
                        <th>Order Status</th>
                        <th>Reject Order</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => <ManageOrder key={order._id} order={order} />)}
                </tbody>
            </table>
            </Container>
        </div>

    )
}

export default ManageOrders
