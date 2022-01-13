import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios';
import pimage1 from '../uploads/image1.jpg';

function DispProp() {
    
  const [propList, setpropList] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:4000/disp')
      .then(response => {
        console.log(response.data)
        setpropList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewpropList() {
    return propList.map((currentrow, index) => {
      return (
        <div class="card text-center card-width">
        <div class="card-header">
          <h4 class="card-title col">{currentrow.title}</h4>
        </div>
        <div class="card-body">
          <p class="card-text">
            {/* <img src={pimage1} alt="house" /><br />  */}
            {/* <img src={"http://localhost:3000/Frontend/src/uploads/${currentrow.image}"} /><br /> */}
            
            <img class="propimg" src={`http://localhost:4000/uploads/${currentrow.image}`} alt="house" /><br/>
            {/* <img src={`../uploads/${currentrow.image}`} alt="home" /><br/> 
            {currentrow.image}<br/>
            http://localhost:4000/uploads/${currentrow.image} <br /> */}
           
          Location : {currentrow.location}, {currentrow.city} <br/>
          Price : &#8377; {currentrow.price} <br/>
          Area : {currentrow.area} sq.ft.<br/>
          Bedrooms : {currentrow.bedroom} <br/>
          Bathrooms : {currentrow.bathroom} <br/>
          </p>
        </div>
        <div class="card-footer text-muted">
          <a href="/contact" class="btn btn-primary">
            Buy
          </a>
        </div>
      </div>
       
      );
    });
  }

  return (
      <div><Navbar />
    <div className="contact">
      
      <h1 class="head">Properties</h1>
      {viewpropList()}
      </div>
    </div>
  );
}
export default DispProp;
