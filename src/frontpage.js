import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Navbar } from "reactstrap";
import Navbar from "./navbar";
import "./index.css";
import Content from "./content";
import Image from "./image";
import Navex from "./navex";

function Frontpage() {
  return (
    <>
      <Navex></Navex>
      <div className="container">
        <div className="content">
          <Content></Content>
        </div>
        <div>
          <Image></Image>
        </div>
      </div>
      <p className="link">
        {" "}
        <a style={{ padding: "10px" }} href="">
          github
        </a>
        /{" "}
        <a style={{ padding: "10px" }} href="">
          linkedn
        </a>{" "}
        /
        <a style={{ padding: "10px" }} href="">
          behance
        </a>
      </p>
    </>
  );
}

export default Frontpage;
