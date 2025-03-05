import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/header';
import styles from './TOS.module.css'; // Import the CSS Module

function TOS() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [scrollHeight, setScrollHeight] = useState<number>(0);

    useEffect(() => {
        // Get the height of the page content (so the scroll can be used properly)
        setScrollHeight(document.documentElement.scrollHeight - window.innerHeight);

        // Update scroll height when window resizes
        const handleResize = () => {
            setScrollHeight(document.documentElement.scrollHeight - window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleScroll = () => {
        if (videoRef.current) {
            // Get scroll position and video duration
            const scrollPosition = window.scrollY;
            const videoDuration = videoRef.current.duration;

            // Calculate the time to set in the video based on scroll
            const playbackTime = (scrollPosition / scrollHeight) * videoDuration;

            // Set video current time
            videoRef.current.currentTime = playbackTime;
        }
    };

    useEffect(() => {
        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollHeight]);

    return (
        <>
            {/* Header stays fixed at the top of the viewport (screen) */}
            <Header />
            
            {/* Main content container */}
            <div className={styles.mainContainer}>
                {/* The video stays fixed behind the header */}
                <video
                    ref={videoRef}
                    src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
                    className={styles.video}
                    muted
                    loop
                    preload="auto"
                />
            </div>
        </>
    );
}

export default TOS;
