import React from 'react'

const ManageItem = ({item}) => {

    const deleteItem = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const sure = confirm('Are you sure you want to delete this item?')
        if (sure) {
            fetch(`https://khuda-lagse-backend.herokuapp.com/item/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    }
    return (
        <tr className="text-center fw-bold">
            <td>{item.title}</td>
            <td>$ {item.price}</td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteItem(item._id)}>Delete Item</button>
            </td>
        </tr>
    )
}

export default ManageItem
