import React from 'react'
import './Delivery.css'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const deliveryImage = 'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'

const Delivery = () => {

    return (
    <div className="page-section pb-0">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="py-3">
            <h1>Welcome to Our Food<br /> Market</h1>
            <p className="text-grey mb-4">Keep always fully happy with eating best food from khudalagse. It is the best food delivey service in the dhaka city. It provides food to their cunsumer within thirty minutes of time. Our customer is always happy with us. We have a very much good brand value in the dhaka city. Want to Know more about ourselves?</p>
            <NavLink className="btn btn-primary" to="/about">Know More!</NavLink>
          </Col>
          <Col lg="6">
            <div className="img-place custom-img-1">
              <img src={deliveryImage} alt=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default Delivery
