import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import styles from "./Navbar.module.css";

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className={styles.ContentContainer}>
                <Navbar.Brand href="#home" className={styles.Logo}>Metatrott<span className={styles.dotcolor}>.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavDropdown className={styles.videoLabel} title="Videos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" className={styles.adventureLabel}>Adventure</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className={styles.musuemsLabel}>Musuems</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className={styles.nationalparkLabel}>National Park</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className={styles.citiesLabel}>Cities</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about" className={styles.aboutLabel}>About</Nav.Link>
                        <Nav.Link href="#contact-us" className={styles.contactLabel}>Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" >
                            <Button variant="outline-light" className={styles.loginText}>Login</Button>{' '}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;