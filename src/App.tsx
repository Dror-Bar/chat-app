import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Container } from './components/screens/container/Container';
import { Login } from './components/screens/login/Login';
import { Register } from 'components/screens/register/Register';
import { NotFound } from './components/screens/notFound/NotFound';
import { Lobby } from 'components/screens/lobby/Lobby';
import { Room } from 'components/screens/room/Room';
import { useDispatch } from 'react-redux'
import { setUser } from './redux/AuthSlice';

export const App = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (name: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUser(name));
    navigate('lobby');
  };

  return (
    <div className={styles.app}>

      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>Chat App</p>
      </header>

      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login onLogin={onLogin} />} />
          <Route path="register" element={<Register onRegister={onLogin} />} />
          <Route path="lobby" element={<Lobby />}>
            <Route path=":room" element={<Room />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
};
