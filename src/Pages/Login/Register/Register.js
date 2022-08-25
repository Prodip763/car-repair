import React, { useState } from "react";
import {useNavigate, Link} from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () =>{
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);



    const navigate = useNavigate();

    const navigateLogin = ()=>{
        navigate('/login');
    }

    if (loading || updating ) {
        return <Loading></Loading>
      }
    // if(user){
    //     console.log('user', user);
    // }
    const handleRegister= async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password= event.target.password.value;
        // const agree = event.target.terms.checked;
        // if(agree){
        //     createUserWithEmailAndPassword(email, password);
        // }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
          console.log('Updated profile');
          navigate('/home');
        

    }
    return(
        <div className="register-form">
            <h2 className="text-primary text-center">Please Register!!</h2>
            <form onSubmit={handleRegister}>
                <input type='text' name='name'  placeholder='Your Name'></input>
                <input type='email' name='email'  placeholder="Enter Your Email" required></input>              
                <input type='password' name="password"  placeholder="Enter Your Password" required></input> 
                <input onClick={() =>setAgree(!agree)} type='checkbox' name='terms' id='terms'></input>
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept car-services Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '': 'text-danger'}`} htmlFor="terms">Accept car-services Terms and Conditions</label>
                <input disabled={!agree} className="w-50 mx-auto btn btn-primary mt-2" type='submit' value="Register"></input>
            </form>
            <p>Alredy have an account? <Link to='/login' onClick={navigateLogin} className="text-primary pe-auto text-decoration-none ">Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};


export default Register;