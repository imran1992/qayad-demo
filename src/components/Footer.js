import React from "react";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerInner">
        <div className="footerInnerRow">
          <div className="footerIR">
            <img src={"/flogo.png"} className="flogo" alt="Footer Logo" />
          </div>
          <div className="footerIR">
            <h3>Home</h3>
            <h6>Menu1</h6>
            <h6>Menu2</h6>
            <h6>Menu3</h6>
            <h6>Menu4</h6>
            <h6>Menu5</h6>
          </div>
          <div className="footerIR">
            <h3>QAYAD</h3>
            <h6>About us</h6>
            <h6>Our leadership</h6>
            <h6>What's new</h6>
          </div>
          <div className="footerIR">
            <h3>QAYAD</h3>
            <h6>About us</h6>
            <h6>Our leadership</h6>
            <h6>What's new</h6>
          </div>
          <div className="footerIR"></div>
        </div>
        <div className="footerInnerDownRow">
          <div>
            <h6>Privacy Policy</h6> <h6>user Agreement</h6>
          </div>
          <h6>(C) 2018-2019 QAYAD Estate Management Co (Pvt) Ltd</h6>
        </div>
      </div>
    </div>
  );
};
export default Footer;
