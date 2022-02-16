import React from 'react';
import styles from './NotFound.module.css';
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1>Oops! Page Not Found</h1>
            <Link to="login">Back to Login</Link>
        </div>
    );
};
