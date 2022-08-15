import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import styles from "./Header.module.css";



function Header() {
    return (
        <div>
            <Carousel fade className={styles.ContentContainer}>
                <Carousel.Item>
                    <img
                        className={styles.imageSlider}
                        src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.imageSlider}
                        src="https://images.pexels.com/photos/4125993/pexels-photo-4125993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.imageSlider}
                        src="https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.imageSlider}
                        src="https://images.pexels.com/photos/1305095/pexels-photo-1305095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.imageSlider}
                        src="https://images.pexels.com/photos/3978294/pexels-photo-3978294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Header;