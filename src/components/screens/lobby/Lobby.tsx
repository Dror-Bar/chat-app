import React, { useState } from 'react';
import styles from './Lobby.module.scss';
import { RootState } from 'redux/Store';
import { useSelector } from 'react-redux';
import { Outlet, Navigate, Link } from "react-router-dom";

const mock = ['New', 'Gaming', 'Developers', 'Sports', 'Graphic Design', 'Random'];

export const Lobby = () => {

    const { user } = useSelector((state: RootState) => state.auth);
    const [rooms, setRooms] = useState([...mock]);

    if (!user) return <Navigate to="/login" replace />

    return (
        <div className={styles.container}>
            <h2> Hello {user}!</h2>
            <div className={styles.content}>
                <div className={styles.roomsContainer}>
                    <h4>Available rooms:</h4>
                    {rooms.map((room, index) =>
                        <div key={index} className={styles.roomName}>
                            <Link to={room}>{room}</Link>
                        </div>)}
                </div>
                <div className={styles.roomContainer}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
