import React from "react";
import { useSelector } from "react-redux";

const  Cartinfo = (props) => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="row cartinfo">
      <div className="col-sm-12">
        <hr />
      </div>

      <div className="col-sm-6 text-left">
  <div className="col-sm-12 font-size-20">Cart Total <span className="calcuation" >${cart.addedItems.length>0? cart.total:''}</span></div>
        <div className="col-sm-12"> Tax <span className="tax" >${cart.addedItems.length>0?(cart.total*18)/100:''}</span></div>
  <div className="col-sm-12">Shipping Charges <span className="tax">${cart.addedItems.length>0?cart.shipping:''}</span></div>
      </div>

      <div className="col-sm-6 text-right">
  <button className="btn btn-warning">{props.text}</button>
      </div>
    </div>
  );
}

export default Cartinfo;
