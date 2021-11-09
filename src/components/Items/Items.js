// dependencies
import { Container, Row } from 'react-bootstrap';
import Item from '../Item/Item';
import useItems from '../../hooks/useItem';

function Items() {
    const {items} = useItems()

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center">Our Food Items</h2>
                <p className="text-center mb-4">Order now and eat hurry as well as keep happy your hungriness.</p>
                <Row>
                    {items.map(item => <Item key={item._id} item={item} />)}
                </Row>
            </Container>
        </section>
    )
}

export default Items;