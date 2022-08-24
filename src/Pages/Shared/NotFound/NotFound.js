import React from "react";
import sleeping from "../../../images/404.jpg";

const NotFound = () =>{
    return(
        <div>
            <h2 className="text-primary text-center">Mechanic is sleeping</h2>
            <img className="w-50 h-50" src={sleeping}></img>
        </div>
    );
};


export default NotFound;