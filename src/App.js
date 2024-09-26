import React, { useState } from 'react';
import './App.css';
import Notepad from './Notepad';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [showRegister, setShowRegister] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <header className="App-header">
                <h1>React Notepad</h1>
                <marquee>This is your notepad app. Welcome!</marquee>
                {isLoggedIn ? (
                    <>
                        <button onClick={toggleDarkMode}>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        {showRegister ? (
                            <RegisterForm />
                        ) : (
                            <LoginForm onLogin={handleLogin} />
                        )}
                        <button onClick={() => setShowRegister(!showRegister)}>
                            {showRegister ? 'Back to Login' : 'Register'}
                        </button>
                    </>
                )}
            </header>
            <main>
                {isLoggedIn && <Notepad />}
            </main>
        </div>
    );
}

export default App;

