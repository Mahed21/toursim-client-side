
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const {tourId}=useParams();
    const nameRef=useRef();
     const emailRef=useRef()
     const addRef=useRef()
     const phoneRef=useRef()
     const perRef=useRef()
    const [detail,setDetail]=useState({});
    
    useEffect(()=>
    {
        fetch(`http://localhost:5000/products/${tourId}`)
        .then(res=>res.json())
        .then(data=>setDetail(data));
       
    },[])
    const handleSubmit=(e)=>
   {
       e.preventDefault();
       const name=nameRef.current.value;
       const email=emailRef.current.value;
       const address=addRef.current.value;
       const phone=phoneRef.current.value;
       const person=perRef.current.value;
       const newUser={name,email,address,phone,person};
      
       fetch('http://localhost:5000/order',{
           method:'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(newUser)
       })
       .then(res=>res.json())
       .then(data=>
        {
            if(data.insertedId)
            {
                alert('Your data is Successfully Collected');
                e.target.reset()
            }
        })
       

   }
  
    return (
      
        <div className="container">
            <div className="row mt-2 mb-2">
                <div className="col-lg-6 overview">
                    <div className="mt-3">
                    <h6>we mac torism limited is here to give services of all people to visit 
                    all over the country with safety</h6>
                    <h4>{detail.name}</h4>
                    <h4>{detail.duration}</h4>
                    <h4>{detail.date}</h4>
                    <h4>{detail.cost}</h4>
                    <button class="btn mt-2">Book Now</button>
                    </div>

                </div>
                <div className="col-lg-6">
                 <img src={detail.img} alt="" class="img-fluid"/>
                </div>
            </div>
               {/* form for booking */}
                <form className="mt-3 mb-3" onSubmit={handleSubmit}>
                <h4>Please fill up the form if yor are Interested to book</h4>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" ref={nameRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Adress</label>
                <input type="text" ref={addRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" ref={emailRef} className="form-control w-50" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="text" ref={phoneRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Number of person</label>
                <input type="text" ref={perRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <h4>Gender</h4>
                <div class="col-12 d-flex">
                
                <div class="form-check">
                 <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                 Male
                </label>
                </div>
                <div class="form-check">
                 <input class="form-check-input ms-3" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                    Female
                </label>
                </div>
              </div>
              <input type="submit" value="Submit" className="btn"/>
              </form>
            {/* form for booking end*/}
             

        </div>
           
       
    );
};

export default Details;