/** @format */

import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv"
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { motion } from "framer-motion";
import { themeContext } from "../../Context"
const Intro = () => {

 const transition = {duration : 2 , type:'spring'}

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I AM</span>
          <span>Sachin Kumar</span>
          <span>
            Full stack Developer with level of experience in web
            development,producting the Quality work
          </span>
        </div>
        <div>
          <button className="button i-button">Hire me</button>
        </div>

        <div className="i-icons">
          <a href="https://github.com/Bhanupratap02">
            <img src={Github} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/bhanu-pratap0211/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/sachin_0211/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv
            className="float-div"
            image={crown}
            txt1="Web"
            txt2="Developer"
          />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv
            className="float-div"
            image={thumbup}
            txt1="Best Design"
            txt2="Award"
          />
        </motion.div>
        {/* {blur divs} */}
        <div className="blur" style={{ background: "rgb(238,210,255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "19rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
