import { useState } from "react";
import "./styles.css";
import { motion } from "framer-motion";

export default function DropDown() {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };
  return (
    <div className="my-app">
      <div className="container">
        <div className="flex-item">
          <h1>onHover</h1>
          <motion.div
            className="menu-item"
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            <a href="/">Menu Item</a>
            <motion.div
              className="sub-menu"
              initial="exit"
              animate={isHover ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="sub-menu-background" />
              <div className="sub-menu-container">
                <div className="sub-menu-item">Submenu Item 1</div>
                <div className="sub-menu-item">Submenu Item 2</div>
                <div className="sub-menu-item">Submenu Item 3</div>
                <div className="sub-menu-item">Submenu Item 4</div>
                <div className="sub-menu-item">Submenu Item 5</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
