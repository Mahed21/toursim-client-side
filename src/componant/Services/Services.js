import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = (props) => {
    const {img,name,duration,cost,date,_id}=props.products;
    return (
        <div>
            <div className="cols">
                <div className="card">
                <img src={img} alt="" className="img-fluid"/>
                
                <h4 className="ms-1">{name}</h4>
                <h4 className="ms-1">Duraion: {duration}</h4>
                <h4 className="ms-1">Total Cost :{cost}</h4>
                <h4 className="ms-1">Date of Tours:{date}</h4>
                <Link to={`/details/${_id}`}>
               <button className="btn">CLick For More Detail</button>
               </Link>
                
                </div>

            </div>
        </div>
    );
};

export default Services;