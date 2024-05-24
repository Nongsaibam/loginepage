import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const styles = {

        loginContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: "url('https://wallpapers-all.com/uploads/posts/2017-07/3_lake_louise.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        wrapper: {
            width: '420px',
            background: 'transparent',
            border: '2px solid rgba(255, 255, 255, 2)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 0 10px',
            color: 'white',
            borderRadius: '10px',
            padding: '30px 40px',
        },
        h1: {
            fontSize: '36px',
            textAlign: 'center',
        },
        inputbox: {
            width: '100%',
            background: 'transparent',
            border2: 'none',
            outline: 'none',
            border: '2px solid rgba(255, 255, 255, 2)',
            borderRadius: '40px',
            font: 'size16px',
            color: 'white',
            paddingTop: '10px',
            paddingBottom: '10px',
            marginTop: '10px',
            paddingLeft: '10px',
            color2: ' white',
        },
        register: {
            color: 'white',
            textDecoration: 'center',
            fontWeight: '600px',
            textAlign: 'center',
            paddingTop: '10px',
        },
    
        btn: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        login: {
            marginTop: '10px',
            padding: '10px 20px',
            border: '1px solid white',
            borderRadius: '15px',
            background: 'transparent',
            color: 'white',
            cursor: 'pointer',
        },
        
      
        forget: {
            textAlign: 'center',
            paddingTop: '20px',
        }
    };

    const navigate = useNavigate();

    const handler = () => {
        navigate("/UserProfile");
    }

    return (
        <>
            <div style={styles.loginContainer}>
                <div style={styles.wrapper}>
                    <h1 style={styles.h1}>Login</h1>
                    <div>
                        <input style={styles.inputbox} type="text" placeholder="Username" />
                        <input style={styles.inputbox} type="password" placeholder="Password" />
                    </div>
                    <div style={styles.rememberforgot}>
                        <div style={styles.btn}>
                            <button onClick={handler} style={styles.login} type="submit">Login</button>
                        </div>
                        <div style={styles.forget}><input type="checkbox" /> Forgot password?</div>
                    </div>
                    <div style={styles.register}>
                        <p>Don't have an account? <a style={{ color: 'blue' }}>Register</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login ;
