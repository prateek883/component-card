import React, { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import styles from "./Featured.module.css";

import useVideoPlayer from "../VideoPlayer/VideoPlayer";

function FeaturedVideos() {
  const videoPlayer = useRef(null);

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoPlayer);

  return (
    <div className={styles.ContentContainer}>
      <h2 className={styles.newsletterTitle}>Featured Videos</h2>
      <Row sm={12}>
        <Col xs={12} sm={12}>
          <Card className={styles.subscribeCardBody}>
            <Card.Body>
              <div className="video-wrapper">
                <video
                  src={video}
                  ref={videoElement}
                  onTimeUpdate={handleOnTimeUpdate}
                />
                <div className="controls">
                  <div className="actions">
                    <button onClick={togglePlay}>
                      {!playerState.isPlaying ? (
                        <i className="bx bx-play"></i>
                      ) : (
                        <i className="bx bx-pause"></i>
                      )}
                    </button>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={playerState.progress}
                    onChange={(e) => handleVideoProgress(e)}
                  />
                  <select
                    className="velocity"
                    value={playerState.speed}
                    onChange={(e) => handleVideoSpeed(e)}
                  >
                    <option value="0.50">0.50x</option>
                    <option value="1">1x</option>
                    <option value="1.25">1.25x</option>
                    <option value="2">2x</option>
                  </select>
                  <button className="mute-btn" onClick={toggleMute}>
                    {!playerState.isMuted ? (
                      <i className="bx bxs-volume-full"></i>
                    ) : (
                      <i className="bx bxs-volume-mute"></i>
                    )}
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FeaturedVideos;
