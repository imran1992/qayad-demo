import React from "react";
import SideBar from "./SideBar";

const AppBody = () => {
  return (
    <div className="appBody">
      <SideBar />
      <div className="appRightBody">
        <div className="appRightInner">
          <div className="appRightBar">
            <div className="appRightBarLeft">
              <h6>Active By Floor</h6>
            </div>
            <h1>List of Purchases Shares</h1>
          </div>
        </div>
        <table>
          <tr className="heading">
            <th></th>
            <th></th>
            <th>Floor</th>
            <th>Share & Quantity</th>
            <th></th>
          </tr>
          {[
            {
              level: "Lower Ground Floor",
              Q5: 5,
              Q10: 2,
              Q20: 1,
              b1: "v",
              b2: "v",
              b3: "v",
            },
            {
              level: "Ground Floor",
              Q5: 5,
              Q10: 0,
              Q20: 0,
              b1: "v",
              b2: "s",
              b3: "b",
            },
            {
              level: "Upper Ground Floor",
              Q5: 10,
              Q10: 5,
              Q20: 0,
              b1: "v",
              b2: "v",
              b3: "b",
            },
            {
              level: "1st Ground Floor",
              Q5: 20,
              Q10: 0,
              Q20: 3,
              b1: "b",
              b2: "v",
              b3: "b",
            },
          ].map(({ level, Q10, Q5, Q20, b1, b2, b3 }, index) => {
            return (
              <tr className="child" key={`Child${index}`}>
                <td>
                  <img
                    alt="room"
                    src="https://sc02.alicdn.com/kf/HTB1CtNVQVXXXXc2aXXXq6xXFXXX0.jpg_350x350.jpg"
                    className="roomImg"
                  />
                </td>
                <td>
                  <div className="roomDetail">
                    <h2>Executive Suit</h2>
                    <h5>QAYAD Hotel</h5>
                    <h6>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </h6>
                  </div>
                </td>
                <td className="roomDetail2">{level}</td>
                <td className="roomDetail3">
                  <div className="rowify">
                    <img src="/Q5.png" alt="Q5" />
                    <button className="rowifyB1">{Q5}</button>
                  </div>
                  <div className="rowify">
                    <img src="/Q10.png" alt="Q10" />
                    <button className="rowifyB2">{Q10}</button>
                  </div>
                  <div className="rowify">
                    <img src="/Q20.png" alt="Q20" />
                    <button className="rowifyB3">{Q20}</button>
                  </div>
                </td>
                <td className="lastColumn">
                  <div>
                    <button
                      className={`b${b1 === "v" ? 1 : b1 === "b" ? 3 : 2}`}
                    >
                      {`${
                        b1 === "v"
                          ? "View Details"
                          : b1 === "b"
                          ? "Book Now"
                          : "SOLD OUT"
                      }`}
                    </button>
                  </div>
                  <div>
                    <button
                      className={`b${b2 === "v" ? 1 : b2 === "b" ? 3 : 2}`}
                    >
                      {`${
                        b2 === "v"
                          ? "View Details"
                          : b2 === "b"
                          ? "Book Now"
                          : "SOLD OUT"
                      }`}
                    </button>
                  </div>
                  <div>
                    <button
                      className={`b${b3 === "v" ? 1 : b3 === "b" ? 3 : 2}`}
                    >
                      {`${
                        b3 === "v"
                          ? "View Details"
                          : b3 === "b"
                          ? "Book Now"
                          : "SOLD OUT"
                      }`}
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default AppBody;
