import React from 'react';

const ClientOrder = (props) => {
    const {name,email,address,phone,place,_id}=props.client;
    const clientDelete=(id)=>
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
                
            }
        });
 
    }

    }
    return (
        <div>
            <div className="cols mt-3 overview ps-3 pt-3 pe-3 pb-3">
                <h4>visting place: {place}</h4>
             <h4>Name: {name}</h4>
             <h4>Email: {email}</h4>
             <h4>Address: {address}</h4>
             <h4>Contact Number : {phone}</h4>
             <button className="btn" onClick={()=>clientDelete(_id)}>Delete</button>
             
        </div>
        </div>
    );
};

export default ClientOrder;