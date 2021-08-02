import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import img from "./myPic.jpg";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className='intro' id='home'>
      <img src={img} alt='' />
      <div className='content'>
        <h1>Hi ! I am Vivek</h1>
        <p>
          I am a &nbsp;
          <span
            style={{
              fontFamily: `"Dancing Script", cursive`,
              fontSize: "30px",
            }}
          >
            Electronics/Software Engineer&nbsp;
          </span>
          who loves to code and learn about tech. Currently I am more involve in
          web development. You can check this site to know about me and all my
          past projects.
        </p>
        <Button variant='contained' color='primary' style={{ margin: "10px" }}>
          <Link to='portfolio' spy={true} smooth={true}>
            Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
