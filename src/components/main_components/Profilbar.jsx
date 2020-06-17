import React from "react";
import { Link } from "react-router-dom";
import Profil from "./Profil";
const Profilbar = ({
  displayProfilBar,
  Logout,
  onOpenFilesDialog,
  inputRef,
  onFileAdded,
  profil,
}) => {
  return (
    <div
      className="col-3"
      style={{
        right: `${displayProfilBar ? "0" : "-100%"}`,
        height: "100%",
        position: "absolute",
        background: "red",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="row">
        <Profil
          onOpenFilesDialog={onOpenFilesDialog}
          inputRef={inputRef}
          onFileAdded={onFileAdded}
          profil={profil}
        />
        <div
          style={{
            height: "10%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {sessionStorage.getItem("user") !== undefined ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>{sessionStorage.getItem("user")}</h4>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="settings"></div>
        <div className="logout">
          <Link to="/sign-in" onClick={Logout} className="link">
            Se déconnecter
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Profilbar;
