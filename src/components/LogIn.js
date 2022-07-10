import React from 'react';
const LogIn = () => {
    return (
        <div className='log-in-container'>
            <h1 className='page-title'>Log In</h1>
            <form action="" className='form'>
                <input type="text" minlength="8" required/>
                <input type="text" minlength="8" required/>
                <button>Log In</button>
                <p><a href="">Don't have an account? Sign up</a></p>
            </form>
        </div>
        
    )
}

export default LogIn;