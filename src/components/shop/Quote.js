import React from "react";
import { useSelector } from "react-redux";
import { addresses } from "../../productList";

const Quote = () => {
  const cart = useSelector((state) => state.cart);
  const list = cart.addedItems.map((item, index) => (
    <tr>
      <td scope="row">{index + 1}</td>
      <td>
        <img
          alt={item.id}
          src={"images/" + item.image}
          width="50px"
          height="50px"
        />
      </td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>{item.price * item.quantity}</td>
    </tr>
  ));
  const myaddress = addresses.filter((item) =>
    item.id === cart.address ? item : null
  );
  const myAdd = myaddress.map((add, index) => {
    return (
      <div className="col-sm-6">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Delivery Address </h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{add.address1}</li>
            <li className="list-group-item">{add.address2 || "N/A"}</li>
            <li className="list-group-item">{add.city}</li>
            <li className="list-group-item">{add.state}</li>
            <li className="list-group-item">{add.postalCode}</li>
            <li className="list-group-item">{add.mobile}</li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div>
      <table class="table table-bordered">
     <thead>
          <tr>
            <th scope="col" >S.No</th>
            <th scope="col" >Image</th>
            <th scope="col" >Name</th>
            <th scope="col" >Price</th>
            <th scope="col" >Quantity</th>
            <th scope="col" >Sub ToTal</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
      <div className="row text-right  m0 bb">
        <div className="col-sm-6 m0 p0">Tax</div>
        <div className="col-sm-6 m0 p0">
          ${cart.addedItems.length > 0 ? (cart.total * 18) / 100 : ""}
        </div>
      </div>
      <div className="row text-right  m0 bb">
        <div className="col-sm-6 m0 p0">Shipping</div>
        <div className="col-sm-6 m0 p0">
          ${cart.addedItems.length > 0 ? cart.shipping : ""}
        </div>
      </div>
      <div className="row text-right  m0 bb">
        <div className="col-sm-6 m0 p0">Total</div>
        <div className="col-sm-6 m0 p0">
          ${cart.total + cart.shipping + (cart.total * 18) / 100}
        </div>
      </div>
      <div className="row">{myAdd}</div>
    </div>
  );
};
export default Quote;
