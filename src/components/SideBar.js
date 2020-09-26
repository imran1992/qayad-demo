import React from "react";
const SideBar = () => {
  return (
    <div className="appSideBar">
      <div className="profileSec">
        <img src="/Kashif.jpg" className="userImage" alt="userImage" />
        <div>
          <h5>Imran Noor</h5>
        </div>
      </div>
      <div className="actionSec">
        <div className="action">
          <div className="actionInn">
            <img src="/home.png" width="30px" alt="icon" className="sideIcon" />
            <h5>Dashboard</h5>
          </div>
          <div className="actionInn">
            <img
              src="/search.png"
              width="30px"
              alt="icon"
              className="sideIcon"
            />
            <h5>My Shares</h5>
          </div>
          <div className="actionInn">
            <img src="/lock.png" width="30px" alt="icon" className="sideIcon" />
            <h5>Change Password</h5>
          </div>
          <div className="actionInn">
            <img
              src="/switch.png"
              width="30px"
              alt="icon"
              className="sideIcon"
            />
            <h5>Sell Units</h5>
          </div>
        </div>
      </div>
      <div className="helpSec">
        <div className="helpSecHelp">
          <img src="/help.png" width="30px" alt="icon" className="sideIcon" />
          <h5>FAQ/Help</h5>
        </div>
        <div className="helpSeclogout">
          <img src="/logout.png" width="30px" alt="icon" className="sideIcon" />
          <h5>Logout</h5>
        </div>
      </div>
    </div>
  );}

  export default SideBar;