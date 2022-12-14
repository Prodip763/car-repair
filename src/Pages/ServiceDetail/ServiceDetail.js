import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h2>You are about to book</h2>
           <img src={service.img}></img>
            <h4>{service.name}</h4>
            <div className="text-center">
                <Link to={`/checkout/${serviceId}`}><button className="btn btn-primary">Proceed Checkout</button></Link>
            </div>
        </div>
    );
};


export default ServiceDetail;