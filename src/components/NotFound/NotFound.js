import React from 'react'
import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router'
const notFoundImage = "https://image.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg" 

const NotFound = () => {
    const history = useHistory()
    return (
        <Container className="text-center p-5">
            <img className="w-25 d-block mx-auto" src={notFoundImage} alt="notfound" />
            <button className="btn btn-primary" onClick={() =>history.push('/')}>Go Home</button>
        </Container>
    )
}

export default NotFound;