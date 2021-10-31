import React, { useEffect, useState } from 'react';
import img1 from '../../gal-1.jpg'
import img2 from '../../gal-2.jpg'
import img3 from '../../gal-3.jpg'
import img4 from '../../gal-4.jpg'
import img5 from '../../gal-5.jpg'
import img6 from '../../gal-6.jpg'
import img7 from '../../gal-7.jpg'
import img8 from '../../gal-8.jpg'
import img9 from '../../gal-9.jpg'
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const [product, setProduct]=useState([]);
 
    useEffect(()=>
    {
       
        fetch('https://scary-goblin-51715.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])
    return (
        <div className="mt-2 mb-2">
            
            {/* //banner part */}
            
               
                <div className="banner">
                
                <div className="pt-5 pb-5 line">
                  <h3 className="text-center">Mac tourism</h3>
                  <p className="text-center d">It is establish in 2018 in sylhet city.Its services is not only availabe
                     inside the division of sylhet.Initially it was only inside sylhet now it is available 
                     all over the country.
                     It is establish in 2018 in sylhet city.Its services is not only availabe
                     inside the division of sylhet.Initially it was only inside sylhet now it is available 
                     all over the country
                  </p>
                 </div>
                </div>
           

            {/* //banner part end */}

            {/* services part */}
            <div className="container mb-2 mt-2">
            <h3>Our Services</h3>
            {
                !product.length?<div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
                </div>:
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                  {
                      product.map(products=><Services products={products} key={products._id}></Services>)
                  }
                  </div>
            }
          

           
            </div>
             {/* services part end*/}
             {/* gallery */}
             <div className="row row-cols-lg-3 gy-2">
              <div className="cols">
               <img src={img1} alt="" className="img-fluid" />
              </div>
              <div className="cols">
               <img src={img8} alt="" className="img-fluid"/>
              </div>
              <div className="cols">
               <img src={img3} alt="" className="img-fluid"/>
              </div>
              <div className="cols">
               <img src={img4} alt="" className="img-fluid"/>
              </div>
              <div className="cols">
               <img src={img5} alt="" className="img-fluid"/>
              </div>
              <div className="cols">
               <img src={img1} alt="" className="img-fluid"/>
              </div>
              <div className="cols">
               <img src={img3} alt="" className="img-fluid"/>
              </div>
              <div className="cols">
               <img src={img8} alt="" className="img-fluid"/>
              </div>
              <div className="cols">
               <img src={img9} alt="" className="img-fluid"/>
              </div>
             </div>

             {/* why choose part */}
             <div className="container mt-3 ">
             <h3 className="text-center heading pt-3 pb-3">Why choose MAC Tourism</h3>
                 <div className="row row-cols-lg-3 mt-5">
                
                 <div className="cols choose">
                  <h4>Small Group</h4>
                  <p>Tours are arranged with small gropu by avarage number of people</p>
                  <hr/>
                 </div>
                 
                 <div className="cols choose">
                  <h4>Lower Price</h4>
                  <p>Price is not as musch as like our tours it is most cheapest toursim than any oter tourism</p>
                  <hr/>
                 </div>
               
                 <div className="cols choose">
                  <h4>Sceduled Tours</h4>
                  <p>We strictly follow times which mentioned in our fixture</p>
                  <hr/>
                 </div>
                
                 <div className="cols choose">
                  <h4>Transport Services</h4>
                  <p>We have a toursit own tourist bus so we can give better service than anay other tourism </p>
                 </div>
                 <div className="cols choose">
                  <h4>Safety</h4>
                  <p>we  have a good history since two years for safety </p>
                 </div>
                 <div className="cols choose">
                  <h4>Inlude with</h4>
                  <p>Food support , transprot service, residence all are included our budget</p>
                 </div>
                 

             </div>
             </div>
            

           
        </div>
    );
};

export default Home;