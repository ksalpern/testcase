import React, { useEffect } from "react";
import { MDBContainer, MDBNavbar, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar dark bgColor="dark">
      <MDBContainer fluid>
        <span>
          <Link to="/">All Product </Link>
        </span>
        <MDBBtn color="dark">
          <Link to="/cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>(
            {totalQuantity})
          </Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
