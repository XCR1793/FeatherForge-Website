
// import React from 'react';
import styles from './PageLinkTree.module.css';

import backgroundImage from '../assets/Home Image.png';
import XCR_pfp from '../assets/DiscordLogo.svg';


import imgPfpGithub from '../assets/DiscordLogo.svg';
import imgPfpTwitter from '../assets/DiscordLogo.svg';
import imgPfpDiscordServer from '../assets/DiscordLogo.svg';
import imgPfpYoutube from '../assets/DiscordLogo.svg';

import imgIconGithub from '../assets/DiscordLogo.svg';
import imgIconTwitter from '../assets/DiscordLogo.svg';
import imgIconDiscordServer from '../assets/DiscordLogo.svg';
import imgIconYoutube from '../assets/DiscordLogo.svg';


function Contacts() {
    return (
        <>
            {/* Background */}
                <img src={backgroundImage} className={styles.backgroundImage} alt="Background" />


            <div className={styles.container}>
                <div></div>

                {/* Content */}
                    <div className={styles.content}>
                        {/* Logo */}
                            <img className={styles.topLogo} src={XCR_pfp}/>


                        {/* Links */}
                            {/* Github */}
                            <a href="https://github.com/XCR1793" target="_blank" rel="noopener noreferrer" className={styles.linkBody}>
                                <div className={styles.linkContent}>
                                    <img className={styles.linkPfp} src={imgPfpGithub} alt="Profile"/>

                                    <div className={styles.linkTextContainer}>
                                        <h2 className={styles.linkHeading}>XCR-1793</h2>
                                        <p className={styles.linkText}>github.com/XCR1793</p>
                                    </div>

                                    <img className={styles.linkIcon} src={imgIconGithub} alt="Link Icon"/>
                                </div>
                            </a>

                            {/* Twitter */}
                            <a href="https://x.com/XCR_1793" target="_blank" rel="noopener noreferrer" className={styles.linkBody}>
                                <div className={styles.linkContent}>
                                    <img className={styles.linkPfp} src={imgPfpTwitter} alt="Profile"/>

                                    <div className={styles.linkTextContainer}>
                                        <h2 className={styles.linkHeading}>XCR_1793</h2>
                                        <p className={styles.linkText}>x.com/XCR_1793</p>
                                    </div>

                                    <img className={styles.linkIcon} src={imgIconTwitter} alt="Link Icon"/>
                                </div>
                            </a>

                            {/* Discord server */}
                            <a href="https://discord.gg/Qu8d7Vtv9n" target="_blank" rel="noopener noreferrer" className={styles.linkBody}>
                                <div className={styles.linkContent}>
                                    <img className={styles.linkPfp} src={imgPfpDiscordServer} alt="Profile"/>

                                    <div className={styles.linkTextContainer}>
                                        <h2 className={styles.linkHeading}>Discord Server</h2>
                                        <p className={styles.linkText}>discord.gg/Qu8d7Vtv9n</p>
                                    </div>

                                    <img className={styles.linkIcon} src={imgIconDiscordServer} alt="Link Icon"/>
                                </div>
                            </a>

                            {/* Youtube */}
                            <a href="https://www.youtube.com/@XCR1793" target="_blank" rel="noopener noreferrer" className={styles.linkBody}>
                                <div className={styles.linkContent}>
                                    <img className={styles.linkPfp} src={imgPfpYoutube} alt="Profile"/>

                                    <div className={styles.linkTextContainer}>
                                        <h2 className={styles.linkHeading}>@XCR-1793</h2>
                                        <p className={styles.linkText}>youtube.com/@XCR1793</p>
                                    </div>

                                    <img className={styles.linkIcon} src={imgIconYoutube} alt="Link Icon"/>
                                </div>
                            </a>
                    </div>

                {/* Bottom */}
                    <div className={styles.pageBottom}>
                        <div className={styles.bottomInactive} />
                        <div className={styles.bottomActive} />
                        <div className={styles.bottomActive} />
                        <div className={styles.bottomActive} />
                        <div className={styles.bottomInactive} />
                    </div>
            </div>
        </>
    );
}

export default Contacts;
