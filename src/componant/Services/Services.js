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
                <div>
                <h5 className="ms-1">{name}</h5>
                <h5 className="ms-1">Duraion: {duration}</h5>
                <h5 className="ms-1">Total Cost :{cost}</h5>
                <h5 className="ms-1"><i class="far fa-clock"></i> {date}</h5>
                </div>
                <Link to={`/details/${_id}`} className="mb-2 ms-1">
               <button className="btn">Book Now</button>
               </Link>
                
                </div>

            </div>
        </div>
    );
};

export default Services;