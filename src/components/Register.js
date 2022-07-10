import React from 'react';

const Register = () => {
    return (
        <div className='log-in-container'>
            <h1 className='page-title'>Register</h1>
            <form action="" className='form'>
                <input type="text" minlength="8" required/>
                <input type="text" minlength="8" required/>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;