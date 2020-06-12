import React from 'react';
import fullScreen from '../../full-screen.png';
import fullScreenExit from '../../full-screen-exit.png';
import muted from '../../mute.png';
import speaker from '../../speaker.png';
const Videocomponent = ({
  callBoard,
  phoneEnd,
  onEnd,
  video1,
  video2,
  updateTime,
  resize,
  onResize,
  onControlSound,
  mute,
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
      <div className='h-100 col-md-12'>
        <video
          ref={video2}
          onTimeUpdate={updateTime}
          style={{
            position: `${resize ? 'fixed' : 'absolute'}`,
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
          }}
        ></video>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
        >
          <div className='ctrboard'>
            <div
              onClick={onControlSound}
              style={{
                left: '0',
                cursor: 'pointer',
              }}
            >
              <img
                src={mute ? muted : speaker}
                alt=''
                style={{
                  height: '20px',
                  width: '20px',
                  boxShadow:
                    '0 15px 20px 0 rgba(0, 0, 0, 0.11),0 5px 10px 0 rgba(0, 0, 0, 0.08)',
                }}
              />
            </div>
            <button
              onClick={onEnd}
              style={{
                borderRadius: '200px',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
              className='btn btn-danger btn-sm my-1'
            >
              {
                <img
                  src={phoneEnd}
                  alt='call'
                  style={{ width: '30px', height: '30px', margin: '0 auto' }}
                />
              }
            </button>
            <div
              onClick={onResize}
              style={{
                cursor: 'pointer',
              }}
            >
              <img
                src={`${!resize ? fullScreen : fullScreenExit}`}
                alt=''
                style={{
                  height: '20px',
                  width: '20px',
                  transition: 'all ease-in-out .3s',
                  boxShadow:
                    '0 15px 20px 0 rgba(0, 0, 0, 0.11),0 5px 10px 0 rgba(0, 0, 0, 0.08)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videocomponent;
