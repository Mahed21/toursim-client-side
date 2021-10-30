import React, { useEffect, useState } from 'react';
import DisplayManageOrder from '../DisplayManageOrder/DisplayManageOrder';

const ManageAllOrder = () => {
    const [manageOrder, setManageOrder]=useState([]);
    useEffect(()=>
    {
        fetch('http://localhost:5000/order')
        .then(res=>res.json())
        .then(data=>setManageOrder(data));
    },[])
    return (
        <div className="container">
            <h1>All booked Data</h1>
            <div className="row row-cols-lg-2">
            {
            manageOrder.map(manage=><DisplayManageOrder manage={manage}>
             </DisplayManageOrder>)}
             </div>



        </div>
    );
};

export default ManageAllOrder;