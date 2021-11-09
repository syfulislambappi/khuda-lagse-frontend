// dependencies
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function Blog({ blog }) {
    const history = useHistory()

    // destructure blog info
    const { title, description, image, _id } = blog;
    
    const handleHistoy = id => history.push(`/blog/${id}`)

    return (
        <Col className="mb-4 mx-auto">
          <Card className="mx-auto" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
                <Card.Text>{`${description.substring(0, 105)} ...`}</Card.Text>
              <Card.Footer>
                <Button variant="dark" onClick={() =>handleHistoy(_id)}>Details</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default Blog;
