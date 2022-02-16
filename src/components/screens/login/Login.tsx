import React, { FC } from 'react';
import styles from './Login.module.scss';
import { Form } from '../../common/form/Form';
import { Link } from "react-router-dom";

interface IProps {
    onLogin?: (name: string, e: React.FormEvent<HTMLFormElement>) => void
};

export const Login: FC<IProps> = ({ onLogin }) => {

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <Form onSubmit={onLogin} />
            <p>Don't have an account?  <Link to="/register">Register</Link></p>
        </div>
    );
};
