import React from 'react';
import { useNavigate } from 'react-router-dom';
export const CreateAccount = () => {
    const styles = {
        MainContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mainHeight: '100vh',
            backgroundImage: "url('https://wallpaperaccess.com/full/3014734.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        },
        wrapper: {
            width: '420px',
            background: 'transparent',
            border: '2px solid(255, 255, 2)',
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

        Create: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '5px',
            paddingBottom: '5px',
            borderRadius: ' 15px',
            background: 'transparent',
            padding: '10px 20px 10px 20px',
        

        },
        login: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '5px',
            paddingBottom: '5px',
            borderRadius: '12px',
            background: 'transparent',
            padding: '10px 20px 10px 20px',

        },

    }
    const navigate = useNavigate();
    const handler=()=> {
         navigate('/Login')
        
        
      }
      

    return (


        <div style={styles.MainContainer}>



            <div style={styles.wrapper}>
                <h1 style={styles.h1}>Create Account</h1>

                <div >
                    <input style={styles.inputbox} type="text" placeholder="Email ID" />
                    <input style={styles.inputbox} type="text" placeholder="Full Name" />
                    <input style={styles.inputbox} type="password" placeholder="Password" />
                </div>

                <div style={styles.Create}>
                    <button style={styles.Create}type="submit">Create</button>
                </div>

                <div style={styles.login}>
                    <button onClick={()=>handler()} style={styles.login} type="submit">Login</button>
                </div>
            </div>

        </div>

    )
}