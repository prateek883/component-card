import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import BannerImage from "../../assets/react.svg";

function Login() {
  return (
    <div className={styles.ContentContainer}>
      <Row>
        <Col sm={7}>
          <a href="/" className={styles.backtoHome}>
            Go to Home Page
          </a>
          <Image src={BannerImage} className={styles.bannerImage} />
        </Col>
        <Col sm={5}>
          <h4 className={styles.LoginTitle}>Login with Mobile Number</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.MobileLabel}>
                Mobile Number
              </Form.Label>
              <Form.Control type="number" placeholder="Enter phone number" />
            </Form.Group>
            <Link to="/advertisingpanel">
            <Button className={styles.topButtons}>
              <div className={styles.topButtonText}>Submit</div>
            </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;