import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../components/header';
import styles from './tos.module.css'; // Import the CSS Module
import gfm from 'remark-gfm';

const TOS: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    // Fetch the TOS.md file
    const fetchMarkdown = async () => {
      try {
        const response = await fetch('/TOS.md'); // Assuming TOS.md is in the public directory
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error loading TOS.md:', error);
      }
    };

    fetchMarkdown();
  }, []);

  const renderSections = (content: string) => {
    const sections: { heading: string; content: string }[] = [];
    let currentSection: string[] = [];
    let currentHeading = '';

    // Split content by newline to process line by line
    const lines = content.split('\n');
    lines.forEach((line) => {
      if (line.startsWith('##')) {
        // If a subheading (##) is found, start a new section
        if (currentSection.length > 0) {
          // Don't repeat the heading in the content
          sections.push({ heading: currentHeading, content: currentSection.join('\n') });
        }
        currentHeading = line.replace('##', '').trim(); // Update current heading, removing '##'
        currentSection = []; // Start new section with an empty array
      } else {
        currentSection.push(line); // Add content under the current section
      }
    });

    // Add the last section, if there's any content left
    if (currentSection.length > 0) {
      sections.push({ heading: currentHeading, content: currentSection.join('\n') });
    }

    return sections;
  };

  return (
    <>
        <Header />
        <div className={styles.tosContainer}>
          <div className={styles.tosContent}>
            <h1 className={styles.tosTitle}>Terms of Service</h1>
            {markdownContent ? (
              renderSections(markdownContent).map((section, index) => (
                <div key={index} className={styles.sectionBox}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  {/* Pass only the content (excluding the heading) to ReactMarkdown */}
                  <ReactMarkdown remarkPlugins={[gfm]}>{section.content}</ReactMarkdown>
                </div>
              ))
            ) : (
              <p>Loading content...</p>
            )}
          </div>
        </div>
    </>
  );
};

export default TOS;

