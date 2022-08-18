import React from "react";
import { YoutubePlayer } from "reactjs-media";



function VideoPlayer() {
  return (
    <div>
        <div>
        <YoutubePlayer
                src="https://www.youtube.com/watch?v=fkbm5nx-M9E"
                allowFullScreen
                height={500}
                width={1300}
            />
        </div>
      </div>
  );
}
export default VideoPlayer;
