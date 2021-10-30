import React, { useEffect, useState } from 'react';

const DisplayManageOrder = (props) => {
    const {name,email,address,phone,_id}=props.manage;
    
    
    const handleDelete=(id)=>
    {
        const proceed=window.confirm('do you want to delete')
       if(proceed){
        const url = (`http://localhost:5000/order/${id}`);
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then (data=>{
            if(data.deletedCount>0)
            {
                alert('deleted successfully');
                
            }
        });
 
    }
 }
    return (
        <div>
            <div className="cols mt-3 overview ps-3 pt-3 pe-3 pb-3">
             <h4>Name: {name}</h4>
             <h4>Email: {email}</h4>
             <h4>Address: {address}</h4>
             <h4>Contact Number : {phone}</h4>
             <button className="btn" onClick={()=>handleDelete(_id)}>Delete</button>
             <button className="ms-2 btn">update</button>
 
            </div>
        </div>
    );
};

export default DisplayManageOrder;