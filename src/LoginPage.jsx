import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

export default function LoginPage() {
    const [page, setPage] = useState('login')
    const onForgotPasswordClick = () => {
        setPage('forgotpassword')
    }
    const onSignUpClick = () => {
        setPage('signup')
    }

    const display = (page) => {
        if (page === 'login')
            return <Login onForgotPasswordClick={onForgotPasswordClick} onSignUpClick={onSignUpClick}/>;
        else if (page === 'signup')
            return <SignUp />;
        else
            return <ForgotPassword />
    }

    return (
        <div style={{backgroundColor: '#5f8d4e', height: '100vh', width: '100wh'}}>
            {display(page)}
        </div>
    )
}