import React from 'react';

const Login = (props) => {
    const { 
        email, 
        setEmail, 
        pass, 
        setPass, 
        handleLogin, 
        handleSignup, 
        accountExists, 
        setAccountExists, 
        emailError, 
        passError,
     } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password"
                required
                value={pass}
                onChange={e => setPass(e.target.value)}/>
                <p className="errorMsg">{passError}</p>
                <div className="btnContainer">
                    {accountExists ? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>
                            Don't have an acocunt? 
                            <span onClick={() => setAccountExists(!accountExists)}>Sign up</span>
                            </p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>
                            Have an account?
                            <span onClick={() => setAccountExists(!accountExists)}>Sign in</span>
                            </p>
                        </>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Login;