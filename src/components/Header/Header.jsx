import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

import styles from "./Header.module.css";

import HeaderImage from "../../assets/headerImage.jpg";

function Header() {
  return (
    <div className={styles.ContentContainer}>
      <Container>
        <Row>
          <Col sm={6}>
            <div>
              <h1 className={styles.headerTitle}>Let's Make your best Trip Ever</h1>
              <p className={styles.paragraphDescription}>
                No matter where in the world you want to go, we can help get you
                there.
              </p>
              <Button className={styles.topButtons}>
                <div className={styles.topButtonText}>Explore Now</div>
              </Button>
            </div>
          </Col>
          <Col sm={6}>
            <Card className={styles.cardContainer}>
                <img
                  className={styles.cardImage}
                  src={HeaderImage}
                />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
