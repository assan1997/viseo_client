import React from "react";
const Navbar = ({ onToggleProfilBar }) => {
  return (
    <div className="row">
      <nav className="navbar " style={{ zIndex: 10000, width: "100%" }}>
        <div className="navbar-brand"></div>
        <div className="">
          <ul className="navbar nav">
            <li className="nav-item">{sessionStorage.getItem("user")}</li>&nbsp;
            <li className="nav-item">
              <div onClick={onToggleProfilBar} className="toggle-button">
                <i
                  style={{
                    color: "gray",
                    cursor: "pointer",
                  }}
                  className="fas fa-ellipsis-v fa-sm fa-fw "
                ></i>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
