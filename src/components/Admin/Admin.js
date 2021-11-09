import React from 'react'
import { Container } from 'react-bootstrap'
import { Redirect, useHistory } from 'react-router'

const Admin = ({isAdmin}) => {
    const history = useHistory()
    return (
        <div className="py-5">
        {isAdmin || <Redirect to="/adminlogin" />}
            <Container>
                <div className="d-flex justify-content-between">
                    <button onClick={() => history.push('/createblog')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Create New Blog
                    </button>
                    <button onClick={() => history.push('/createitem')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Add New Item
                    </button>
                    <button onClick={() => history.push('/manageitems')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Manage Items
                    </button>
                    <button onClick={() => history.push('/manageorders')} className="btn btn-white shadow p-4 fw-bold fs-4">
                        Manage Orders
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Admin
