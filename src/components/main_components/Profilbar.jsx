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
      className="row"
      style={{
        transition: "ease-in-out 0.5s",
        height: `${displayProfilBar ? "100%" : "0"}`,
        position: "relative",
        background: "whitesmoke",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        top: `${displayProfilBar ? "0" : "-150%"}`,
      }}
    >
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
        <Link
          to="/sign-in"
          className="fas fa-sign-out-alt"
          onClick={Logout}
        ></Link>
        Se deconnecter
      </div>
    </div>
  );
};
export default Profilbar;
