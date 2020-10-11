import React from 'react'
import styles from "./login.module.css"
import axios from 'axios';
import history from '../history.js'

let userUser 
let userPassword

function usernameChanged(event) {
    userUser = event.target.value
}
function passwordChanged(event) {
    userPassword = event.target.value
}


function buttonClick(event) {
    axios.post('http://http://54.82.112.239//login', {}, {
        auth: {
            username: userUser,
            password: userPassword
        }
    })
        .then(response => {
            
                history.push('/content');
                window.location.reload(false);
            
        } ) 
}

export default function login() {
    return (
        <div>
            <div className={styles.contentbox}>
                <h1 className={styles.header}>CarCharProject</h1>
                <div className={styles.loginbox}>
                    <h3 className={styles.header}>Log in</h3>

                    <p className={styles.header}>Username</p>
                    <div className={styles.textinputcontainer}>
                        <input type="text" placeholder="Enter Username" name="uname" required className={styles.textinput} onChange={usernameChanged}></input>
                    </div>


                    <p className={styles.header}>Password</p>
                    <div className={styles.textinputcontainer}>
                        <input type="text" placeholder="Enter Password" name="psw" required className={styles.textinput} onChange={passwordChanged}></input>
                    </div>

                    <br></br>
                    <div className={styles.logincontainer}>
                        <button type="submit" onClick={() => buttonClick()}>Login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
