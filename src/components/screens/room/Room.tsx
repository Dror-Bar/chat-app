import React from 'react';
import styles from './Room.module.scss';
import { RootState } from 'redux/Store';
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";

export const Room = () => {

    const { user } = useSelector((state: RootState) => state.auth);
    const { room } = useParams();

    return (
        <div className={styles.container}>
            <h4>Welcome to {room} room</h4>
        </div>
    );
};
