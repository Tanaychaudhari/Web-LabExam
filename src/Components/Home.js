import React from 'react'
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="container mt-3 mb-3">
        <h1>Zomato Food Delivery App</h1>
        <div className="row mt-5 mb-t p-3">
          <div className="col-xl-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Order Here</h5>
                <p class="card-text">
                  Please click button to get Order Details
                </p>
                <Link to="/read" class="btn btn-primary">
                  Orders
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">All Deliveries</h5>
                <p class="card-text">
                  Please click to see All deliveries
                </p>
                <Link to="/create" class="btn btn-primary">
                  All Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
