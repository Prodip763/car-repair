import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";


const Checkout = () =>{
    const [user] = useAuthState(auth);
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
   
    const handlePlaceOrder= e =>{
        e.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value

        }
        axios.post('http://localhost:5000/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                e.target.reset();

            }
        })
    }
    return(
        <div className="w-50 mx-auto">
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className="w-50 mb-2" type='text' name='name'value={user?.displayName} placeholder="Name" readOnly disabled></input> <br></br>
                <input className="w-50 mb-2" type='email' name='email'value={user?.email} placeholder="Enter your email" readOnly disabled></input> <br></br>
                <input className="w-50 mb-2" type='text' name='service'value={service.name} placeholder="Service" readOnly></input> <br></br>
                <input className="w-50 mb-2" type='text' name='address' placeholder="Address" autoComplete="off"></input> <br></br>
                <input className="w-50 mb-2" type='text' name='phone' placeholder="Phone number"></input> <br></br>
                <input className="btn btn-primary" type='submit' value='Place Order'></input>
                
            </form>
        </div>
    );
};



export default Checkout;