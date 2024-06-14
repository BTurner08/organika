import React from 'react';
import "./video.css"
function YouTubeVideo() {
const videoId = 'oBdEyYC9Mf0';
const videoUrl = `https://www.youtube.com/embed/${videoId}?start=1`;

return (
    <div className="video-container">
    <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
    </div>
)
}
export default YouTubeVideo;