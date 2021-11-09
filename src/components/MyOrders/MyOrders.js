import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'
import OrderItem from '../OrderItem/OrderItem'

const MyOrders = () => {
    const [orders, setOrders] = React.useState([])
    const [sortedOrders, setSortedOrders] = React.useState([])
    const {user} = useAuth()

    useEffect(() => {
        fetch(`https://khuda-lagse-backend.herokuapp.com/ordered`)
            .then(res => res.json())
            .then(data => setOrders(data))
    },[])
    
    useEffect(() => {
        setSortedOrders(orders.filter(order => order.email === user.email))
    }, [orders, user])
    return (
        <div className="my-6">
            <h1 className="text-center my-5">My Orders</h1>
            <Container className="my-5">
            <table className="table table-warning table-bordered">
                <thead className="table-dark">
                    <tr className="text-center">
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Cancel Order</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedOrders.map(order => <OrderItem key={order._id} order={order} />)}
                </tbody>
            </table>
            </Container>
        </div>

    )
}

export default MyOrders
