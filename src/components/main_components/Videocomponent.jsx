import React from "react";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import CallEndIcon from "@material-ui/icons/CallEnd";
import Fab from "@material-ui/core/Fab";
import StopScreenShareIcon from "@material-ui/icons/StopScreenShare";
const Videocomponent = ({
  callBoard,
  phoneEnd,
  onEnd,
  video1,
  video2,
  updateTime,
  resize,
  onResize,
  onMuteStreamVoice,
  onMuteVoice,
  mute,
  onToggleVideoStream,
  onAddVideoStream,
  onTogVideo,
  onSharingScreen,
  exitSharingScreen,
  onExitSharingScreen,
}) => {
  return (
    <div
      style={{
        height: "100%",
        background: "rgb(54, 61, 77)",
        position: "absolute",
        width: "100%",
        zIndex: "10000",
        display: `${callBoard ? "block" : "none"}`,
      }}
    >
      <div className={`h-100 col-12 ${resize ? "offset-md-2 col-md-8" : ""}`}>
        <div className="row">
          <video
            ref={video2}
            onTimeUpdate={updateTime}
            style={{
              position: `${resize ? "absolute" : "fixed"}`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "100%",
              width: "100%",
              objectFit: "cover",
              transition: "all ease-in-out 0.3s",
            }}
            autoPlay
          ></video>
          <video
            ref={video1}
            autoPlay
            style={{
              position: "absolute",
              top: -19,
              right: 0,
              width: "200px",
              height: "200px",
              zIndex: 100000,
              borderRadius: "20px",
            }}
          ></video>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          >
            <div className="ctrboard col-6 col-sm-7 col-md-5 col-lg-3">
              <div className="ctrboard-speakers">
                <div className="" onClick={onMuteVoice}>
                  <Fab color="primary" aria-label="add" size="medium">
                    <MicIcon />
                  </Fab>
                </div>
              </div>
              <div onClick={onEnd}>
                <Fab color="secondary" aria-label="add">
                  <CallEndIcon />
                </Fab>
              </div>
              <div className="ctrboard-speakers">
                <div onClick={onToggleVideoStream}>
                  <Fab color="primary" aria-label="add" size="medium">
                    {onTogVideo ? <VideocamOffIcon /> : <VideocamIcon />}
                  </Fab>
                </div>
              </div>
            </div>
          </div>
          {!exitSharingScreen && (
            <div onClick={onSharingScreen} className="sharing-screen">
              <Fab color="primary" aria-label="add" size="medium">
                <ScreenShareIcon />
              </Fab>
            </div>
          )}
          {exitSharingScreen && (
            <div onClick={onExitSharingScreen} className="sharing-screen">
              <Fab color="primary" aria-label="add" size="medium">
                <StopScreenShareIcon />
              </Fab>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videocomponent;
