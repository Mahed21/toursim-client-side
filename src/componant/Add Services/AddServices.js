import React from 'react';
import { useRef } from 'react';

const AddServices = () => {
    const nameRef=useRef();
    const imgRef=useRef();
    const costRef=useRef();
    const durationRef=useRef();
    const dateRef=useRef()
    const handleAddServices=(e)=>
    {
       
       const name=nameRef.current.value;
       const img=imgRef.current.value;
       const cost=costRef.current.value;
       const duration=durationRef.current.value;
       const date=dateRef.current.value;
       const newUser={name,img,cost,duration,date};
      
       fetch('http://localhost:5000/products',{
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
                alert('services is successfully added');
                e.target.reset()
            }
        })
     e.preventDefault();
    }
    return (
        <div>

            <div className="container">
            <form className="mt-3 mb-3" onSubmit={handleAddServices}>
                <h4>Add Services</h4>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Place Name</label>
                <input type="text" ref={nameRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Image url</label>
                <input type="text" ref={imgRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Duration</label>
                <input type="text" ref={durationRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Cost</label>
                <input type="text" ref={costRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Date</label>
                <input type="text" ref={dateRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
        
              <input type="submit" value="Submit"/>
              </form>
              </div>
        </div>
    );
};

export default AddServices;