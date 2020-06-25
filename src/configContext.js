import React from "react";
export default React.createContext({
  online: "https://fluter-socket-django.herokuapp.com",
  local: `http://${window.location.hostname}:4001`,
});
