import React, { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import styles from "./Featured.module.css";

import VideoPlayer from "../VideoPlayer/VideoPlayers";

function FeaturedVideos() {
  return (
    <div className={styles.ContentContainer}>
      <h2 className={styles.newsletterTitle}>Explore Videos</h2>
      <Row sm={12}>
      <Col xs={12} sm={4}>
          <Card className={styles.subscribeCardBody}>
            <Card.Body>
              <VideoPlayer />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card className={styles.subscribeCardBody}>
            <Card.Body>
              <VideoPlayer />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
          <Card className={styles.subscribeCardBody}>
            <Card.Body>
              <VideoPlayer />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FeaturedVideos;
