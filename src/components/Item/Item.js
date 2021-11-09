// dependencies
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function Item({ item }) {
    const history = useHistory()

    // destructure blog info
    const { title, description, price, image, _id } = item;
    
    const handleHistoy = id => {
      history.push(`/checkout/${id}`)
    }

    return (
        <Col className="mb-4 mx-auto">
          <Card className="mx-auto" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
                <Card.Text>{`${description.substring(0, 105)} ...`}</Card.Text>
              <Card.Footer>
                <p>{`$${price}`}</p>
                <Button variant="dark" onClick={() =>handleHistoy(_id)}>Order Now</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default Item;
