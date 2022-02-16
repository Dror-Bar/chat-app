import React, { FC } from 'react';
import styles from './Register.module.scss';
import { Form } from '../../common/form/Form';
import { Link } from "react-router-dom";

interface IProps {
    onRegister?: (name: string, e: React.FormEvent<HTMLFormElement>) => void
};

export const Register: FC<IProps> = ({ onRegister }) => {

    return (
        <div className={styles.container}>
            <h1>Register</h1>
            <Form onSubmit={onRegister} />
            <p>Already have an account?  <Link to="/login">Login</Link></p>
        </div>
    );
};
