import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-elastic-carousel";
import * as data  from "../../productList";
import Cartinfo from "./Cartinfo";

const Main = (props) => {
    console.log(data.products);
  const addedItems = useSelector((state) => state.cart.addedItems);
  const dispatch = useDispatch();
  // const product = data.product;
  const [items, setItems] = useState([{}]);

  const addToCart = (e) => {
    let num = parseInt(e.target.value);
    dispatch({ type: "ADD_QUANTITY_WITH_PRODUCT", id: items[num - 1].id });
  };

  const removeToCart = (e) => {
    let num = parseInt(e.target.value);
    if (addedItems.length > 0) {
      dispatch({ type: "SUB_QUANTITY", id: items[num - 1].id });
    } else {
      return false;
    }
  };

  const findIndexArray = (id) => {
    if (addedItems.length > 0) {
      for (let i = 0; i < addedItems.length; i++) {
        if (addedItems[i].id === id) {
          return addedItems[i].quantity;
        }
      }
    }
    return "";
  };

  const list = items.map((item, index) => (
    <div value={item.id} key={item.id}>
      <img
        alt={item.id}
        src={"images/" + item.image}
        width="200px"
        height="200px"
      />
      <div className="row bg-light m0">
        <div className="col-sm-12 bg-light m0 title">{item.title}</div>
      </div>
      <div className="row bg-light m0">
        <div className="col-sm-2 text-left p0">
          <button value={item.id} className="custom-btn " onClick={addToCart}>
            +
          </button>
        </div>{" "}
        <div className="col-sm-8 text-center" key={item.id + "btn"}>
          {findIndexArray(item.id)}
        </div>
        <div className="col-sm-2 p0">
          <button
            value={item.id}
            className="custom-btn"
            onClick={(e) => removeToCart(e)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    setItems(data.products);
    return () => {};
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 text-center">
          {addedItems.length > 0 ? addedItems.length + " products in cart" : ""}
        </div>
        <div className="col-sm-6 text-center"></div>
      </div>
      <Carousel itemsToShow={3}>{list}</Carousel>
      {addedItems.length > 0 && <Cartinfo text="Select Address" />}
    </div>
  );
};

export default Main;
