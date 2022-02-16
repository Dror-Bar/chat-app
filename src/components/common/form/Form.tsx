import React, { FC, useState } from 'react';
import styles from './Form.module.scss';

interface IProps {
    onSubmit?: (name: string, e: React.FormEvent<HTMLFormElement>) => void
};

export const Form: FC<IProps> = ({ onSubmit = (_, e) => e.preventDefault() }) => {

    const [name, setName] = useState('');

    return (
        <div className={styles.container}>
            <form onSubmit={e => onSubmit(name, e)}>
                <div className={styles.inputContainer}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="pass"
                        required
                    />
                </div>
                <div className={styles.submitContainer}>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
};
