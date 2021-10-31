
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';


import UseAuth from '../../Context/UseAuth';
import './Details.css'

const Details = () => {
    const {user}=UseAuth();
    const {tourId}=useParams();
    const nameRef=useRef();
    const placeRef=useRef();
     const emailRef=useRef()
     const addRef=useRef()
     const phoneRef=useRef()
     const perRef=useRef()
     const statusRef=useRef();
    const [detail,setDetail]=useState({});
    
    useEffect(()=>
    {
        fetch(`https://scary-goblin-51715.herokuapp.com/products/${tourId}`)
        .then(res=>res.json())
        .then(data=>setDetail(data));
       
    },[])
    const handleSubmit=(e)=>
   {
       e.preventDefault();
       const name=nameRef.current.value;
       const place=placeRef.current.value;
       const email=emailRef.current.value;
       const address=addRef.current.value;
       const phone=phoneRef.current.value;
       const person=perRef.current.value;
       const status=statusRef.current.value;
       const newUser={name,email,address,phone,person,place,status};
      
       fetch('https://scary-goblin-51715.herokuapp.com/order',{
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
                alert('Thank you for choose us your data is Successfully Collected');
                e.target.reset()
            }
        })
       

   }
   const buttonClick=(e)=>
   {
       e.preventDefault();
       alert('Please Filled up below form if you are agree to book');
   }
  
    return (
      
        <div className="container">
            <h3 className="text-center">Welcome {user.displayName} </h3>
            <h3 className="text-center">{user.email} </h3>
            <div className="row mt-4 mb-2">
                <div className="col-lg-6 overview">
                    <div className="mt-3">
                    <h6>we mac torism limited is here to give services of all people to visit 
                    all over the country with safety</h6>
                    <h4>{detail.name}</h4>
                    <h4>{detail.duration}</h4>
                    <h4>{detail.date}</h4>
                    <h4>{detail.cost}</h4>
                    <button class="btn mt-2" onClick={buttonClick}>Book Now</button>
                    </div>

                </div>
                <div className="col-lg-6">
                 <img src={detail.img} alt="" class="img-fluid"/>
                </div>
            </div>
               {/* form for booking */}
                <form className="mt-3 mb-3" onSubmit={handleSubmit} id="click">
                <h4>Please fill up the form if yor are Interested to book</h4>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" ref={nameRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Place Name</label>
                <input type="text" ref={placeRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
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
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">status</label>
                <input type="text" ref={statusRef} value="pending" className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
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