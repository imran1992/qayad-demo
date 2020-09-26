import React from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="hdr1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
          (item, index) => (
            <div
              key={"jss" + index}
              style={{
                width: "5.882vw",
                height: 6,
                backgroundColor: item % 2 === 0 ? "#382133" : "#5A0632",
              }}
            ></div>
          )
        )}
      </div>
      <div className="hdr2">
        <div className="hdrInner">
          <div className="hdrInnerA">
            <h4 className="slogan">Belive</h4>
            <h5 className="slogan">to</h5>
            <h4 className="slogan">Achieve</h4>
            {[1, 2, 3, 4].map((item, index) => (
              <h6 key={"H6" + index} className="smenuButton">
                MENU {item}
              </h6>
            ))}
          </div>
          <div className="hdrInnerA">
            <h6>Login</h6>
            <p>|</p>
            <h6>Registration</h6>
            <p>|</p>
            <h6>Help</h6>
          </div>
        </div>
      </div>
      <div className="hdr3">
        <div className="hdrInner">
          <h2 className="companyName">QAYAD</h2>
          <h5 className="menuButton">HOME</h5>
          <h5 className="menuButton">TRANDING PROJECTS</h5>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <h5 key={"H5" + index} className="menuButton">
              MENU {item}
            </h5>
          ))}
        </div>
      </div>
      <div className="hdr4">
        {[
          { name: "SPACE MALL", rate: 0.2 },
          { name: "QAYAD HOTEL", rate: 0.2 },
          { name: "QAYAD HOTEL", rate: -0.2 },
          { name: "QAYAD HOTEL", rate: 0.2 },
          { name: "QAYAD HOTEL", rate: 0 },
          { name: "QAYAD HOTEL", rate: -0.2 },
          { name: "QAYAD HOTEL", rate: -0.2 },
          { name: "QAYAD HOTEL", rate: 0.2 },
          { name: "QAYAD HOTEL", rate: 0.2 },
          { name: "QAYAD HOTEL", rate: -0.2 },
        ].map(({ name, rate }, index) => (
          <TickerBoxes key={`Ticker${index}`} name={name} rate={rate} />
        ))}
        <img className="logo" alt="logo" src={"/logo.png"} />
      </div>
    </div>
  );
};
export default Header;

const TickerBoxes = ({ name, rate }) => {
  return (
    <div className="sqBoxes">
      <h6 className="sqBoxesU">{name}</h6>
      <div className="rowify">
        <h6 className="sqBoxesD">20 sq ft @ 6,500({rate})</h6>
        {rate === 0 ? (
          <img className="rateArrow" alt="rate-arrow" src={"/flat.png"} />
        ) : Math.sign(rate) === -1 ? (
          <img className="rateArrow" alt="rate-arrow" src={"/down.png"} />
        ) : (
          <img className="rateArrow" alt="rate-arrow" src={"/up.png"} />
        )}
      </div>
    </div>
  );
};
