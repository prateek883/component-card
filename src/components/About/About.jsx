import React from "react";
import Alert from "react-bootstrap/Alert";

import styles from "./About.module.css";

function AboutSection() {
  return (
    <div className={styles.contentContainer}>
      <Alert className={styles.aboutSection}>
        <Alert.Heading className={styles.aboutTitle}>
          "We at Metatrott believe that everyone is a globetrotter at heart!.
        </Alert.Heading>
        <p className={styles.aboutDescription}>
          Be it swimming with the fishes in the great barrier reef, exploring a
          Swiss Village, exploring the Louvre or streaming an exciting session
          with the locals of Eygpt, now explore all and more in Metatrott.
        </p>
        <p className={styles.aboutDescription}>
          So what are you waiting for ? <br/>gather the meta device and start your
          journey with us across the metaverse!
        </p>
      </Alert>
    </div>
  );
}

export default AboutSection;
