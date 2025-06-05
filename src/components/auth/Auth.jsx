import { useState } from 'react'
import '../../styles/auth.scss';

function Auth({setUserData}) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [login, setLogin] = useState("");

    const sendUserData = () => {
        setUserData(login);
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <h2>{isRegistering ? 'Реєстрація' : 'Вхід'}</h2>

                <form className="auth__form">
                    {isRegistering && (
                        <>
                            <input type="text" placeholder="Ім'я" />
                            <input type="email" placeholder="Пошта" />
                        </>
                    )}

                    {!isRegistering && (
                        <input type="text" placeholder="Логін" onChange={(e) => setLogin(e.target.value)}/>
                    )}

                    <input type="password" placeholder="Пароль" />

                    {isRegistering && (
                        <input type="password" placeholder="Повторіть пароль" />
                    )}

                    <button type="submit" onClick={() => sendUserData()}>
                        {isRegistering ? 'Створити профіль' : 'Увійти'}
                    </button>
                </form>

                <div className="auth__toggle">
                    {isRegistering ? (
                        <p>
                            Вже є акаунт?{' '}
                            <button onClick={() => setIsRegistering(false)}>Увійти</button>
                        </p>
                    ) : (
                        <p>
                            Немає акаунту?{' '}
                            <button onClick={() => setIsRegistering(true)}>Раєстрація</button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Auth;
