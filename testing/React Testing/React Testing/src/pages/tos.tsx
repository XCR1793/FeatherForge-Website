import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../components/header';
import styles from './tos.module.css'; // Import the CSS Module
import gfm from 'remark-gfm';
import Video from '../assets/Synth Companion Spinning.mp4';

const TOS: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>(0);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch('/TOS.md');
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error loading TOS.md:', error);
      }
    };
    fetchMarkdown();
  }, []);

  useEffect(() => {
    const updateScrollHeight = () => {
      setScrollHeight(document.documentElement.scrollHeight - window.innerHeight);
    };
    updateScrollHeight();
    window.addEventListener('resize', updateScrollHeight);
    return () => window.removeEventListener('resize', updateScrollHeight);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedMetadata = () => {
        setVideoDuration(videoRef.current!.duration);
      };
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => videoRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }
  }, []);

  const handleScroll = () => {
    if (videoRef.current && videoDuration > 0) {
      const scrollPosition = window.scrollY;
      const playbackTime = (scrollPosition / scrollHeight) * videoDuration;
      videoRef.current.currentTime = Math.min(Math.max(playbackTime, 0), videoDuration);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollHeight, videoDuration]);

  const renderSections = (content: string) => {
    const sections: { heading: string; content: string }[] = [];
    let currentSection: string[] = [];
    let currentHeading = '';

    const lines = content.split('\n');
    lines.forEach((line) => {
      if (line.startsWith('##')) {
        if (currentSection.length > 0) {
          sections.push({ heading: currentHeading, content: currentSection.join('\n') });
        }
        currentHeading = line.replace('##', '').trim();
        currentSection = [];
      } else {
        currentSection.push(line);
      }
    });

    if (currentSection.length > 0) {
      sections.push({ heading: currentHeading, content: currentSection.join('\n') });
    }

    return sections;
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <video
          ref={videoRef}
          src={Video}
          className={styles.video}
          muted
          preload="auto"
        />
        <div className={styles.tosContainer}>
          <div className={styles.tosContent}>
            <h1 className={styles.tosTitle}>Terms of Service</h1>
            {markdownContent ? (
              renderSections(markdownContent).map((section, index) => (
                <div key={index} className={styles.sectionBox}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  <ReactMarkdown remarkPlugins={[gfm]}>{section.content}</ReactMarkdown>
                </div>
              ))
            ) : (
              <p>Loading content...</p>
            )}
          </div>
        </div>
      </div>
      <Header />
    </>
  );
};

export default TOS;
