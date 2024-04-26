import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const TabToTop = () => {
  const [BacktoTop, setBacktopTop] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktopTop("d-block");
      } else setBacktopTop("");
    });
  }, []);
  const screenup = () => {
    window.scrollTo({
      top: 10,
      behavior: "auto",
    });
  };
  return (
    <div>
      <Link
        to="#"
        id="back-to-top"
        onClick={screenup}
        className={`${BacktoTop}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
      </Link>
    </div>
  );
};

TabToTop.propTypes = {};

TabToTop.defaultProps = {};

export default TabToTop;
