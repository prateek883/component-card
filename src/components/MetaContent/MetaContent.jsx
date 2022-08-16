import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./MetaContent.module.css";

function MetaContent() {
  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.exploreTitle}>
        Want's to Explore amazing wonders in your life
      </h1>
      <Row>
        <Col xs={12} md={6}>
          <Card className={styles.tajCard}>
            <Card.Img
              className={styles.cardImage}
              variant="top"
              src="https://images.pexels.com/photos/7263897/pexels-photo-7263897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className={styles.cardBodyDescription}>
            <Card.Body>
              <Card.Text className={styles.cardLabel}>
                Want to see Taj Mahal ?
              </Card.Text>
              <p className={styles.contentDescription}>
                Taj Mahal is surrounded by gardens, Fountains, and pools and it
                is purely made of pure white marble with it's fine structure.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Card className={styles.cardBodyDescription}>
            <Card.Body>
              <Card.Text className={styles.cardLabel}>
                Want to experiment an paris on a comfort zone ?
              </Card.Text>
              <p className={styles.contentDescription}>
                Paris, the capital of the most populas city of France and one of
                the most beautiful place in the world. It is also known for the
                Louvre Museum, Notre-Dame cathedral, and the Eiffel tower
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className={styles.parisCard}>
            <Card.Img
              className={styles.cardImage}
              variant="top"
              src="https://images.pexels.com/photos/2574634/pexels-photo-2574634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MetaContent;
