import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


import styles from "./Subscribe.module.css";


function Subscribe(){
    return(
        <div className={styles.ContentContainer}>
      <Row sm={12}>
        <Col xs={12} sm={7}>
        <Card className={styles.subscribeCardBody}>
      <Card.Body>
  <h2 className={styles.newsletterTitle}>Check our Daily Newsletter</h2>
          <p className={styles.subscribeDescription}>Sign Up for updates related to tours, travels and amazing adventure that you wanna enjoy alot !
            </p>
            <Form className={styles.textSubscribe}>
            <Form.Group className="d-flex flex-end ">
              <Form.Control
                type="email"
                size="lg"
                placeholder="Enter your email"
                autoComplete="subscriber"
                className={styles.subcriberEmailField}
              />
              <Button
                className={styles.submitButton}
                value="submit"
                type="submit"
              >
                <div className={styles.submitButtonText}>Subscribe Me!</div>
              </Button>
            </Form.Group>
          </Form>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={5}> 
          <Image src="https://images.pexels.com/photos/2217613/pexels-photo-2217613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="subscribe" className={styles.imageSusbcribe}></Image>
        </Col>
      </Row>
    </div>
    )
}


export default Subscribe;