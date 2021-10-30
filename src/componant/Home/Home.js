import React, { useEffect, useState } from 'react';
import img from '../../travel1.jpg';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const [product, setProduct]=useState([]);
    useEffect(()=>
    {
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])
    return (
        <div className="mt-2 mb-2">
            
            {/* //banner part */}
            <div className="row mb-3">
                <div className="col-lg-6">
                <img src={img} alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-6 banner">
                
                <div className="ms-2">
                 <h3>Mac tourism</h3>
                 <p>It is establish in 2018 in sylhet city.Its services is not only availabe
                     inside the division of sylhet.Initially it was only inside sylhet now it is available 
                     all over the country.
                  </p>
                 </div>
                </div>
            </div>

            {/* //banner part end */}
            {/* services part */}
            <div className="container mb-2">
            <h1>Services part</h1>
            
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-1">
            {
                product.map(products=><Services products={products}></Services>)
            }
            </div>

           
            </div>
             {/* services part end*/}
             {/* details part after onclick */}

             {
                 
             }

           
        </div>
    );
};

export default Home;