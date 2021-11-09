import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Col, Container, Row } from "react-bootstrap";

const Checkout = () => {
    const history = useHistory();
    const {user} = useAuth();
    const {checkoutId} = useParams()
    const [item, setItem] = useState(null)

    const { register, handleSubmit } = useForm();
    useEffect(() => {
        fetch(`https://khuda-lagse-backend.herokuapp.com/item/${checkoutId}`)
            .then(res => res.json())
            .then(data => setItem(data[0]))
    }, [checkoutId])

    const onSubmit = data => {
        const checkoutData = {...data, price: item.price, productName: item.title, image: item.image}
        fetch(`https://khuda-lagse-backend.herokuapp.com/ordered`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkoutData)
        })
        .then(res => res.json())
        .then(data => alert(data.message))
        history.push("/complete")
    }

    return (
        <>
        <h1 className="text-center my-5">Checkout Your Ordered Food Item</h1>
            <Container className="my-5">
                <Row>
                    <Col md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input id="name" type="text" className="form-control" {...register("name")} value={user.displayName} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input id="email" type="email" className="form-control" {...register("email")} value={user.email} readOnly />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea className="form-control" {...register("address", {required: true})} placeholder="Enter Delivery Address" />
                            </div>
                            <input type="submit" value="Checkout" className="btn btn-warning cursor-pointer" />
                        </form>
                    </Col>
                    <Col md={6}>
                        <div className="mb-5">
                            <h2>Ordered item name is: <span className="fw-normal">{item?.title}</span></h2>
                            <h3>Price is: <span className="fw-normal mb-3">${item?.price}</span></h3>
                            <div className="w-50 my-3 bg-gray p-2 shadow radius-3">
                                <img className="img-fluid" src={item?.image} alt="food item" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Checkout
