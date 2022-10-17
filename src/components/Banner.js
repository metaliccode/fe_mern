import React from "react";
import { Zoom, Fade } from "react-reveal";
import { Link } from "react-router-dom";
import "../components/Banner.css";

const Banner = () => {
  return (
    <section className="mt-5 mb-5 ">
      <div className="container">
        <div className="row">
          <Zoom>
            {/* tulisan/btn */}
            <div className="col-md-6 pt-5 pt-lg-0 d-flex justify-content-center flex-column order-lg-1 order-2">
              <h1>
                Continous Learning Keep Up to Date{" "}
                <strong className="text-primary">Inixindo Bandung</strong>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, accusamus deleniti. Eveniet ad assumenda eius aliquid
                numquam fugiat minima aut sunt delectus corrupti.
              </p>
              <div className="mt-4">
                <Link to="/" className="btn btn-outline-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </Zoom>
          {/* gambar */}
          <Fade right>
            <div className="col-lg-6 order-lg-2 order-1">
              <img
                src="assets/logo.svg"
                alt="logo"
                className="img-fluid animasi"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Banner;
