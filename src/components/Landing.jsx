import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="main">
    <div className="container h-100">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-lg-10 align-self-end">
          <h1 className="text-uppercase text-white font-weight-bold">Get your international recipes</h1>
          <hr className="divider my-4" />
        </div>
        <div className="col-lg-8 align-self-baseline">
          <h6 className="text-white-75 mb-5">You are one click away from getting the right recipe for your international dishes.</h6>
          <Link to="/recipes" className="btn btn-primary btn-xl">Get it now</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
