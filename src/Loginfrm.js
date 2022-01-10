import React from 'react';
import useLoginfrm from "./useLoginfrm";
import formVal from './FormValidation'; 
 
const Loginfrm = () => { 
    const { data, formErr, whenChanged, whenSubmitted } = useLoginfrm(signin, formVal); 

    function signin() {
        alert('The User Email: ' + data.email + ' has been submitted!');
        console.log(data);
    }

    return (
        <form className="login-wrapper" onSubmit={whenSubmitted}>
            <h1>Login Page</h1>
            <input placeholder="Email Address" type="email" name="email" onChange={whenChanged} value={data.email || ''} />
            {formErr.email && (
            <p className="error">{formErr.email}</p>
            )}

            <input placeholder="Password" type="password" name="password" onChange={whenChanged} value={data.password} />
            {formErr.email && (
            <p className="error">{formErr.password}</p>
            )}
            <button type="submit" className="submit">Login</button>
        </form>
    );
};

export default Loginfrm;
