import React from 'react';
import styles from './Container.module.css';
import { Outlet } from "react-router-dom";

export const Container = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Outlet />
            </div>
        </div>
    );
};
