import React from "react";
import { YoutubePlayer } from "reactjs-media";



function VideoPlayer() {
  return (
    <div>
        <div>
        <YoutubePlayer
                src="https://www.youtube.com/watch?v=fkbm5nx-M9E"
                allowFullScreen
                height={300}
                width={370}
            />
        </div>
      </div>
  );
}
export default VideoPlayer;
