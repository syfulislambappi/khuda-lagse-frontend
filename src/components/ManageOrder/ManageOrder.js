import React from 'react'

const ManageOrder = ({order}) => {

    const deleteOrder = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const sure = confirm('Are you sure you want to reject this order?')
        if (sure) {
            fetch(`https://khuda-lagse-backend.herokuapp.com/ordered/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => alert(data.message))
    }
    }
    const updateOrderStatus = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const sure = confirm('Are you sure you want to deliver this order?')
        if (sure) {
            fetch(`https://khuda-lagse-backend.herokuapp.com/ordered/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => alert(data.message))
    }
    }

    const statusClass = `${order.status === 'Delivered' ? 'btn-success' : 'btn-warning'} btn d-inline-block p-1 text-white fw-bold rounded`
    return (
        <tr className="text-center fw-bold">
            <td>{order.name}</td>
            <td>{order.productName}</td>
            <td>$ {order.price}</td>
            <td><button onClick={() => updateOrderStatus(order._id)} className={statusClass}>{order.status}</button></td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteOrder(order._id)}>Reject Order</button>
            </td>
        </tr>
    )
}

export default ManageOrder
