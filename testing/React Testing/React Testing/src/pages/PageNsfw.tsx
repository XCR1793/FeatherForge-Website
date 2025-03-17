import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import videoSrc from '../assets/MarkPunch.mp4'; // Import the video file
import styles from './PageNsfw.module.css'; // Import the CSS module

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleEnded = () => {
    console.log('Video ended');
    navigate('/'); // Redirect to the home page after video ends
  };

  return (
    <div 
      className={styles.videoContainer}
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.style.cursor = 'none'; // Hide cursor when mouse enters the video area
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.style.cursor = 'default'; // Restore cursor when mouse leaves
        }
      }}
    >
      <video
        ref={videoRef}
        className={styles.videoElement}
        autoPlay
        onEnded={handleEnded} // Trigger the redirect when the video ends
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
