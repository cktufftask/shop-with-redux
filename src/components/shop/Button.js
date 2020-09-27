import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector } from 'react-redux';
const Button = () => {
    const addedItems = useSelector((state) => state.cart.addedItems);
    const handleClick = (e) => {
       
        if(addedItems.length<=0) e.preventDefault()
    }
  return (
    <div className="row pb20">
      <div className="col-sm-12">
        <NavLink  exact  to="/">
          <button className="btn btn-dark btn-arrow-right">
            <span className="circle">1</span> Review and Schedule
          </button>
        </NavLink>
        <NavLink to="/address" onClick={handleClick}>
          <button className="btn btn-dark btn-arrow-right" disabled={addedItems.length<=0?true:false} >
            <span className="circle">2</span> Select Address
          </button>
        </NavLink>
        <NavLink to="/quote">
          <button className="btn btn-dark btn-arrow-right" disabled={addedItems.length<=0?true:false}>
            <span className="circle">3</span> Check Quote
          </button>
        </NavLink>
        <NavLink to="/orderplace">
          <button className="btn btn-dark btn-arrow-right" disabled={addedItems.length<=0?true:false}>
            <span className="circle">4</span>Order Place
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default Button;
