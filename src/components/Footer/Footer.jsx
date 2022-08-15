import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.contentContainer}>
        <Container>
                <Row>
                    <Col xs={12} sm={6}>
                       <h1 className={styles.heading}>Metatrott<span className={styles.dot}>.</span></h1>
                       <p className={styles.description}>A metatrott will give you amazing feeling of tours, travels and adventure</p>
                    </Col>
                    <Col xs={12} sm={6}>
                       <h4 className={styles.heading}>Connect with us :</h4>
                       <div className={styles.socialIcons}>
                       </div>
                    </Col>
                    <hr className={styles.horizontalLine} />
                    <span className={styles.copyrightTitle}>Metatrott@2022 Copyright</span>
                </Row>
                </Container>
        </div>

    )
}

export default Footer;