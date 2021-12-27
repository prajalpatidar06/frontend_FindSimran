import React, { Component } from "react";
import { Link } from "react-router-dom";

const aboutbg = {
  opacity: 0.05,
};

const mystyle = {
  color: "#2563EB",
  fontSize: "20px",
  justifyContent: "justified",
};
const main = {
  display: "inline-flex",
  width: "100%",
  marginTop: "15px",
  alignItems: "center",
  justifyContent: "space-evenly",
  position: "relative",
};

export class aboutUs extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <img
            className={aboutbg + " hidden sm:flex"}
            src="https://firebasestorage.googleapis.com/v0/b/findcodingpartner.appspot.com/o/about-bg1.jpg?alt=media"
            alt="img"
          />
          <div style={{ backgroundColor: "#fdfdfd" }} className="flex-1">
            <div className="about" style={{ margin: "50px" }}>
              <h1
                className="uppercase"
                style={{ fontWeight: "bold", fontSize: "30px" }}
              >
                About FindSimran
              </h1>
              <p style={{ fontSize: "20px" }}>
                <span style={{ fontWeight: "bold", color: "#2563EB" }}>
                  Welcome to FindSimran
                </span>
                , the peer to peer network of nerds, where you can find your
                coding partner or search relevant projects to work on.
              </p>
            </div>

            <div className="vision" style={{ margin: "50px" }}>
              <h1
                className="uppercase"
                style={{ fontWeight: "bold", fontSize: "30px" }}
              >
                Vision
              </h1>
              <p style={{ fontSize: "20px" }}>
                Create a platform to collaborate in others idea to enhance your
                skills and make open source contribution.
              </p>
            </div>

            <div className="mision" style={{ margin: "50px" }}>
              <h1
                className="uppercase"
                style={{ fontWeight: "bold", fontSize: "30px" }}
              >
                Mission
              </h1>
              <p style={{ fontSize: "20px" }}>
                <span style={{ fontWeight: "bold", color: "#2563EB" }}>
                  The mission of FindSimran is simple
                </span>
                : connect Coders globally to make them more productive and
                successful.
              </p>
            </div>

            <div className="developers" style={{ margin: "50px" }}>
              <h1
                className="uppercase"
                style={{ fontWeight: "bold", fontSize: "30px" }}
              >
                Who Are We?
              </h1>
              <p style={{ fontSize: "20px" }}>
                <span style={{ fontWeight: "bold", color: "#2563EB" }}>
                  FindSimran
                </span>{" "}
                is an initiative started in october 2021 by{" "}
                <span style={{ fontWeight: "bold", color: "#2563EB" }}>
                  Prajal Patidar
                </span>{" "}
                and{" "}
                <span style={{ fontWeight: "bold", color: "#2563EB" }}>
                  Diksha Patidar
                </span>{" "}
                with an aim of easing to find peer programmers to transform
                their ideas into code.
              </p>
            </div>
          </div>
          <img
            className={aboutbg + " hidden sm:flex"}
            src="https://firebasestorage.googleapis.com/v0/b/findcodingpartner.appspot.com/o/about-bg1.jpg?alt=media"
            alt="img"
          />
        </div>
        <div style={{ background: "#F3F4F6", height: "40%", padding: "30px" }}>
          <p className="uppercase" style={{ fontSize: "20px", color: "black" }}>
            For more information about our Website
          </p>
          <div style={main}>
            <div style={mystyle}>
              <Link to="/queries">Queries </Link>
            </div>
            <div style={mystyle}>
              <Link to="/queries">Contact us</Link>
            </div>
            <div style={mystyle}>
              <Link to="/queries">searching.....</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default aboutUs;
