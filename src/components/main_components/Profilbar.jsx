import React from "react";
import { Link } from "react-router-dom";
import Zone from "./Zone";
import SettingsIcon from "@material-ui/icons/Settings";
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
      className="col-4 col-md-3"
      style={{
        right: `${displayProfilBar ? "0" : "-100%"}`,
        height: "100%",
        position: "absolute",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <div className="row  h-100">
        <Zone
          onOpenFilesDialog={onOpenFilesDialog}
          inputRef={inputRef}
          onFileAdded={onFileAdded}
          profil={profil}
          size={"50%"}
        />
        <div className="logout">
          <Link to="/sign-in" onClick={Logout} className="link">
            <h6>Se déconnecter</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Profilbar;
