import React from "react";
import google from "../../../images/social/Google.png"
import facebook from "../../../images/social/fb.png"
import github from "../../../images/social/Git.png"
import {  useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
     const navigate = useNavigate();
     let errorElement;
    if (error || error1) {
         errorElement = <div>
            <p className="text-danger">Error: {error?.message} {error1?.message} </p>
          </div>
        
      }
      if (loading || loading1 ) {
        return <Loading></Loading>
      }
      if (user || user1) {
        navigate('/home');
      }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '2px' }} className="w-50 bg-primary"></div>
                <p className="px-4 mt-2">OR</p>
                <div style={{ height: '2px' }} className="w-50 bg-primary"></div>
            </div>
            {errorElement}
            <div>
                <button 
                onClick={() => signInWithGoogle()}
                className="btn btn-info d-block w-50 mx-auto  my-2">
                    <img className="rounded " style={{width: '30px'}} src={google}></img>
                    <span className="px-2">Google Sign In</span>
                </button>
                <button className="btn btn-info d-block w-50 mx-auto my-2 ">
                    <img className="rounded " style={{width: '30px'}} src={facebook}></img>
                    <span className="px-2">Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className="btn btn-info d-block w-50 mx-auto my-2">
                    <img className="rounded " style={{width: '30px'}} src={github}></img>
                    <span className="px-2">Github Sign In</span>
                </button>
            </div>
        </div>
    );
};


export default SocialLogin;