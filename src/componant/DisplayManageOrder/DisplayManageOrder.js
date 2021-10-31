   import React, { useEffect, useState } from 'react';

    const DisplayManageOrder = (props) => {
    const {name,email,address,phone,_id,status}=props.manage;
    const [usersManage,setUsersManage]=useState([])
    useEffect(()=>
    {
        fetch('https://scary-goblin-51715.herokuapp.com/order')
        .then(res=>res.json())
        
        .then(data=>setUsersManage(data));
    },[])
 
    const handleDelete=(id)=>
    {
        const proceed=window.confirm('do you want to delete')
       if(proceed){
        const url = (`https://scary-goblin-51715.herokuapp.com/order/${id}`);
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then (data=>{
            if(data.deletedCount>0)
            {
                alert('deleted successfully');
                const remain=usersManage.filter(user=>user._id!==id)
                 setUsersManage(remain);
                
                
            }
        });
 
    }
 }
 
     const updatetoActivate =(id)=>
    {
         const url = (`https://scary-goblin-51715.herokuapp.com/order/${id}`);
        fetch(url,{
            method:"PUT",
            headers:
            {
                'content-type':'appplication/json'
            },
            body:JSON.stringify(usersManage)
        })
        .then()

     }
    return (
        <div>
            <div className="cols mt-3 overview ps-3 pt-3 pe-3 pb-3">
             <h4>Name: {name}</h4>
             <h4>Email: {email}</h4>
             <h4>Address: {address}</h4>
             <h4>Contact Number : {phone}</h4>
             <h4>status : {status}</h4>
             <button className="btn" onClick={()=>handleDelete(_id)}>Delete</button>
             <button className="ms-3 btn" onClick={()=>updatetoActivate(_id)}>Activate</button>
           
 
            </div>
        </div>
    );
};

export default DisplayManageOrder;