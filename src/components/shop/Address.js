import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { addresses } from "../../productList";
import Cartinfo  from './Cartinfo';

const  Address = () => {

  const [myaddress, useMyaddress] = useState(addresses);
  const addS = useSelector(state => state.cart.address);
  const dispatch = useDispatch();
  const selectedAdd =(e)=>{
    dispatch({type:'UPDATE_ADDRESS',address:e.target.value});
  }
  const list= myaddress.map((add, index)=>
  { return (  <div className="col-sm-4">
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Address {index+1}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{add.address1}</li>
        <li className="list-group-item">{add.address2||'N/A'}</li>
        <li className="list-group-item">{add.city}</li>
        <li className="list-group-item">{add.state}</li>
        <li className="list-group-item">{add.postalCode}</li>
        <li className="list-group-item">{add.mobile}</li>
        <li className="list-group-item"><input type="radio" name="selectedAddress" onChange={selectedAdd } value={add.id}/></li>
      </ul>
    </div>
  </div>)}
    ) ;
  return (
      <>
      <div className="row">
          <div className="col-sm-12">
              Select Address
          </div>
      </div>
    <div className="row">
        {list}
    </div>
    {addS && <Cartinfo text="Select Quot"/>}
    </>
  );
}

export default Address;
