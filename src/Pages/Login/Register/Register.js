import React from "react";
import {useNavigate, Link} from 'react-router-dom';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () =>{
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);



    const navigate = useNavigate();

    const navigateLogin = ()=>{
        navigate('/login');
    }
    if(user){
        navigate('/home');
    }
    const handleRegister= event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password= event.target.password.value;
        createUserWithEmailAndPassword(email, password);

    }
    return(
        <div className="register-form">
            <h2 className="text-primary text-center">Please Register!!</h2>
            <form onSubmit={handleRegister}>
                <input type='text' name='name'  placeholder='Your Name'></input>
                <input type='email' name='email'  placeholder="Enter Your Email" required></input>              
                <input type='password' name="password"  placeholder="Enter Your Password" required></input> 
                <input type='submit' value="Register"></input>
            </form>
            <p>Alredy have an account? <Link to='/login' onClick={navigateLogin} className="text-danger pe-auto text-decoration-none ">Please Login</Link></p>

        </div>
    );
};


export default Register;