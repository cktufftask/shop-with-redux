import React from "react";
import { useSelector } from "react-redux";
import { addresses } from "../../productList";


const Quote = () => {
  const cart = useSelector((state) => state.cart);
  const list = cart.addedItems.map((item, index) => (
    <div className="row" key={item.id}>
      <div className="col-sm-2">{index + 1}</div>
      <div className="col-sm-2">
        <img
          alt={item.id}
          src={"images/" + item.image}
          width="20px"
          height="20px"
        />
      </div>
      <div className="col-sm-2">{item.title}</div>
      <div className="col-sm-2">{item.price}</div>
      <div className="col-sm-2">{item.quantity}</div>
      <div className="col-sm-2">{item.price * item.quantity}</div>
    </div>
  ));
  const myaddress= addresses.filter((item)=>(item.id===cart.address)?item:null)
  const myAdd= myaddress.map((add, index)=>
  { return (  <div className="col-sm-6">
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Delivery Address </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{add.address1}</li>
        <li className="list-group-item">{add.address2||'N/A'}</li>
        <li className="list-group-item">{add.city}</li>
        <li className="list-group-item">{add.state}</li>
        <li className="list-group-item">{add.postalCode}</li>
        <li className="list-group-item">{add.mobile}</li>
      </ul>
    </div>
  </div>)}
    ) ;
  
  return (
    <div>
      <div className="row" key="Header">
        <div className="col-sm-2">S.No</div>
        <div className="col-sm-2">Image</div>
        <div className="col-sm-2">Name</div>
        <div className="col-sm-2">Price</div>
        <div className="col-sm-2">Quantity</div>
        <div className="col-sm-2">Sub ToTal</div>
      </div>
      {list}
      <div className="row text-right  m0">
        <div className="col-sm-6 m0 p0">Tax</div>
  <div className="col-sm-6 m0 p0">${cart.addedItems.length>0?(cart.total*18)/100:''}</div>
      </div>
      <div className="row text-right  m0">
        <div className="col-sm-6 m0 p0">Shipping</div>
        <div className="col-sm-6 m0 p0">${cart.addedItems.length>0?cart.shipping:''}</div>
      </div>
      <div className="row text-right  m0">
        <div className="col-sm-6 m0 p0">Total</div>
        <div className="col-sm-6 m0 p0">${cart.total + cart.shipping + ((cart.total*18)/100) }</div>
      </div>
      <div className="row">
      {myAdd}
      </div>  
    </div>
  );
};
export default Quote;
