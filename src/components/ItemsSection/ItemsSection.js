// dependencies
import { Container, Row } from 'react-bootstrap'
import useItems from '../../hooks/useItem';
import Item from '../Item/Item';

function ItemsSection() {
    const {items} = useItems()

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center">Our Food Items</h2>
                <p className="text-center mb-4">Order now and eat hurry as well as keep happy your hungriness.</p>
                <Row>
                    {items.slice(0, 3).map(item => <Item key={item._id} item={item} />)}
                </Row>
            </Container>
        </section>
    )
}

export default ItemsSection;