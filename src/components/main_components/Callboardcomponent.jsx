import React from "react";
const Callboardcomponent = ({
  callControlBoard,
  initName,
  initProfil,
  AcceptCall,
  phoneCall,
  phoneEnd,
  onDenied,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        bottom: `${callControlBoard ? "0" : "-120%"}`,
        transition: "all ease-in 0.3s",
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="callboard col-12"
    >
      <div className="text-center callbard-control col-6 col-md-4 col-lg-3" >
        <h3>
          Appel video <i className="fas fa-video"></i>
        </h3>
        <br />
        <div className="profil_zone_avatar">
          <img src={`http://localhost:4000/ressources/${initProfil}`} alt="" />
        </div>
        <h4>{initName}</h4>
        <div className="row" style={{ marginTop: "25px" }}>
          <div className="form-group col-6">
            <button className="btn btn-success" onClick={AcceptCall}>
              <img
                src={phoneCall}
                alt="call"
                style={{ width: "30px", height: "30px" }}
              />
            </button>
          </div>
          <div className="form-group col-6">
            <button className="btn btn-danger" onClick={onDenied}>
              <img
                src={phoneEnd}
                alt="call"
                style={{ width: "30px", height: "30px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Callboardcomponent;
