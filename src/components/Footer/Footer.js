import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import './Footer.css';

const Footer = () => {

  return (
    <footer className="page-footer">
      <Container>
        <Row className="px-md-3">
          <Col sm="6" lg="3" className="py-3">
            <h5>Important Links</h5>
            <ul className="footer-menu">
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/items">Items</NavLink></li>
              <li><NavLink to="/orders">Orders</NavLink></li>
            </ul>
          </Col>
          <Col sm="6" lg="3" className="py-3">
            <h5>More About</h5>
            <ul className="footer-menu">
              <li><NavLink to="/hello">Terms & Condition</NavLink></li>
              <li><NavLink to="/hi">Privacy</NavLink></li>
              <li><NavLink to="/blogs">Our Blogs</NavLink></li>
            </ul>
          </Col>
          <Col sm="6" lg="3" className="py-3">
            <h5>Our partner</h5>
            <ul className="footer-menu">
              <li><NavLink to="/">Food Panda</NavLink></li>
              <li><NavLink to="/">Pahtao Food</NavLink></li>
              <li><NavLink to="/">Sohoz Food</NavLink></li>
            </ul>
          </Col>
          <Col sm="6" lg="3" className="py-3">
            <h5>Contact</h5>
            <p className="footer-link mt-2">212/1A, East Noyatola, Moghbazar, Ramna, Dhaka-1217</p>
            <NavLink to="/" className="footer-link">+880-1704-504710</NavLink>
            <br />
            <NavLink to="/" className="footer-link">khudalagse.com.bd</NavLink>
            <h5 className="mt-3">Social Media</h5>
            <div className="footer-sosmed mt-3">
              <NavLink to="/"><FaFacebook className="footer-icons" /></NavLink>
              <NavLink to="/"><FaTwitter className="footer-icons" /></NavLink>
              <NavLink to="/"><FaInstagram className="footer-icons" /></NavLink>
              <NavLink to="/"><FaLinkedin className="footer-icons" /></NavLink>
              <NavLink to="/"><FaWhatsapp className="footer-icons" /></NavLink>
            </div>
          </Col>
        </Row>
        <hr />
        <p id="copyright">Copyright &copy; 2021 <NavLink to="/">KhudaLagse</NavLink>. All right reserved</p>
      </Container>
    </footer>
    )
}

export default Footer
