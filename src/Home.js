import React from "react";
import Product from "./Product";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const bimg =
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg";
  return (
    <div className="home">
      <div className="home__container">
        <img src={bimg} alt="" className="home__image" />

        <div className="home__row">
          <Product
            id={1}
            title="The Lean Startup "
            image="https://m.media-amazon.com/images/I/51KjBxUVwEL.__AC_SY200_.jpg"
            rating={3}
            price={99.99}
          />
          <Product
            id={2}
            title="The Lean Startup "
            image="https://images-eu.ssl-images-amazon.com/images/I/71fgd%2BWAkHL._AC_UL480_SR315,480_.jpg"
            rating={3}
            price={99.99}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="The Lean Startup "
            image="https://m.media-amazon.com/images/I/41wqWn1z26L.__AC_SY200_.jpg"
            rating={3}
            price={99.99}
          />
          <Product
            id={4}
            title="The Lean Startup "
            image="https://m.media-amazon.com/images/I/41u1gIrVxfL.__AC_SY200_.jpg"
            rating={3}
            price={99.99}
          />
          <Product
            id={5}
            title="The Lean Startup "
            image="https://m.media-amazon.com/images/I/51KjBxUVwEL.__AC_SY200_.jpg"
            rating={3}
            price={99.99}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="The Lean Startup "
            image="https://m.media-amazon.com/images/I/51KjBxUVwEL.__AC_SY200_.jpg"
            rating={3}
            price={99.99}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
