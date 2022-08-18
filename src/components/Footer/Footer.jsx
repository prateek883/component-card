import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import Facebook from '../../assets/social/facebook.png';
import Linkedin from '../../assets/social/Linkedin.png';
import Twitter from '../../assets/social/Twitter.png';

import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.contentContainer}>
        <Container>
                <Row>
                    <Col xs={12} sm={8}>
                       <h1 className={styles.heading}>Metatrott<span className={styles.dot}>.</span></h1>
                       <p className={styles.description}>A metatrott will give you amazing feeling of tours, travels and adventure</p>
                    </Col>
                    <Col xs={12} sm={4}>
                       <h4 className={styles.heading}>Connect with us :</h4>
                       <div className={styles.socialIcons}>
                            <img src={Facebook} alt="facebook" className={styles.socialLogo}/>
                            <img src={Linkedin} alt="linkedin" className={styles.socialLogo}/>
                            <img src={Twitter} alt="twitter" className={styles.socialLogo}/>
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