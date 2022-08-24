import React from "react";
import './Register.css';
import {useNavigate, Link} from 'react-router-dom';


const Register = () =>{
    const navigate = useNavigate();

    const navigateLogin = e=>{
        navigate('/login');
    }
    const handleRegister= e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password= e.target.password.value;

    }
    return(
        <div className="register-form">
            <h2 className="text-primary text-center">Please Register!!</h2>
            <from onSubmit={handleRegister}>
                <input type='text' name='name' id='' placeholder='Your Name'></input>
                <input type='email' name='email' id='' placeholder="Enter Your Email" required></input>              
                <input type='password' name="password" id="" placeholder="Enter Your Password" required></input> 
                <input type='submit' value="Register"></input>
            </from>
            <p>Alredy have an account? <Link to='/register' onClick={navigateLogin} className="text-danger pe-auto text-decoration-none ">Please Login</Link></p>

        </div>
    );
};


export default Register;