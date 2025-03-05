import React from 'react';
import Header from '../components/header';
import styles from './error404.module.css';

const Error404: React.FC = () => {
    return (
        <>
            <div className={styles.errorContainer}>
                <div className={styles.errorMessage}>
                    <h1 className={styles.errorTitle}>404 - Page Not Found</h1>
                    <p className={styles.errorDescription}>Sorry, the page you're looking for doesn't exist.</p>
                </div>
            </div>
            <Header />
        </>
    );
}

export default Error404;
