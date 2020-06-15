import React from 'react';
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
}) => {
  return (
    <div
      style={{
        height: '100%',
        background: 'rgb(54, 61, 77)',
        position: 'absolute',
        width: '100%',
        zIndex: '10000',
        display: `${callBoard ? 'block' : 'none'}`,
      }}
    >
      <div className={`h-100 col-12 ${resize ? 'offset-md-2 col-md-8' : ''}`}>
        <div className='row'>
          <video
            ref={video2}
            onTimeUpdate={updateTime}
            style={{
              position: `${resize ? 'absolute' : 'fixed'}`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              transition: 'all ease-in-out 0.3s',
            }}
            autoPlay
          ></video>
          <video
            ref={video1}
            autoPlay
            style={{
              position: 'absolute',
              top: -19,
              right: 0,
              width: '200px',
              height: '200px',
              zIndex: 100000,
              borderRadius: '20px',
            }}
          ></video>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}
          >
            <div className='ctrboard col-6 col-sm-6 col-md-3 col-lg-2'>
              <div className='ctrboard-speakers'>
                <div className='icons' onClick={onMuteVoice}>
                  <i className='fas fa-microphone'></i>
                </div>
                <div className='icons' onClick={onMuteStreamVoice}>
                  <i className={`fas fa-volume-${mute ? 'up' : 'mute'}`}></i>
                </div>
              </div>
              <div className='endbutton' onClick={onEnd}>
                <img src={phoneEnd} alt='call' className='endbuttonImage' />
              </div>
              <div className='ctrboard-speakers'>
                <div className='toggle-video' onClick={onToggleVideoStream}>
                  <i className='fas fa-video'></i>
                </div>
                <div className='toggle-video' onClick={onAddVideoStream}>
                  <i className='fas fa-video-slash'></i>
                </div>
                <div className='d-md-block d-none'>
                  <div onClick={onResize} className='toggle-video'>
                    <i className='fas fa-compress'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videocomponent;
