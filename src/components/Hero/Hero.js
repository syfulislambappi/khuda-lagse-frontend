// dependencies
import './Hero.css';
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router';

function Hero() {
    const history = useHistory();

    const goToService = () => history.push('/items');
    
    return (
        <section className="hero-section">
            <div className="w-75 text-center hero-content">
                <h1 className="text-white display-5 fw-bold">Khuda Lagse Is The Biggest Food Delivery Service in Dhaka</h1>
                <p className="text-white">We deliver food to the customer within 30-40 minutes. We have lots of delivery man to deilver the food. Our Delivery area is within  dhaka city. Always welcome to order in our website.</p>
                <Button variant="outline-light" className="fw-bold" onClick={goToService}>Order Now!</Button>
            </div>
        </section>
    )
}

export default Hero;