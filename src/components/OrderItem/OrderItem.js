import React from 'react'

const OrderItem = ({order}) => {

    const deleteOrder = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const sure = confirm('Are you sure you want to cancel this order?')
        if (sure) {
            fetch(`https://khuda-lagse-backend.herokuapp.com/ordered/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    }

    const statusClass = `${order.status === 'Delivered' ? 'bg-success' : 'bg-warning'} d-inline-block p-1 text-white fw-bold rounded`
    return (
        <tr className="text-center fw-bold">
            <td>{order.productName}</td>
            <td>$ {order.price}</td>
            <td><span className={statusClass}>{order.status}</span></td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteOrder(order._id)} disabled={order.status === 'Delivered' ? true : false}>Cancel Order</button>
            </td>
        </tr>
    )
}

export default OrderItem
