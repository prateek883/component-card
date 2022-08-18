import React from "react";
import { YoutubePlayer } from "reactjs-media";



function VideoPlayer() {
  return (
    <div>
        <div>
        <YoutubePlayer
                src="https://www.youtube.com/watch?v=lznP52OEpQk"
                allowFullScreen
                height={500}
                width={1300}
            />
        </div>
      </div>
  );
}
export default VideoPlayer;
