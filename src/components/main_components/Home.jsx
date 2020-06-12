import React, { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import axios from 'axios';
import phoneCall from '../../call.png';
import phoneEnd from '../../phone-call-end.png';
import Contactzone from './Contactzone';
import Videocomponent from './Videocomponent';
import Callboardcomponent from './Callboardcomponent';
import ChatzoneInput from './ChatzoneInput';
import ChatzoneHeader from './ChatzoneHeader';
import Chatzonebody from './Chatzonebody';
import Navbar from '../partials_components/Navbar';
import { animateScroll } from 'react-scroll';

import Profilbar from './Profilbar';
import CurrentInfoBar from './CurrentInfoBar';
import sound from '../../me-too.mp3';
const Home = () => {
  const socket = io(`http://${window.location.hostname}:4000/`, {
    transports: ['websocket', 'polling'],
  });

  let v1Ref = useRef(null);
  let v2Ref = useRef(null);
  let scrollRef = useRef(null);
  let notif = new Audio(sound);

  const [users, setUsers] = useState([]);
  const [usersFilter, setUserFilter] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [init, setInit] = useState('');
  const [peer, setPeer] = useState();
  const [receivePeer, setReceivePeer] = useState();
  const [peerSignal, setPeerSignal] = useState();
  const [initPeer, setInitPeer] = useState();
  const [transmission, setTransmission] = useState();
  const [end, setEnd] = useState(false);
  const [initSignal, setInitSignal] = useState();
  const [initProfil, setInitProfil] = useState();
  const [initName, setInitName] = useState();
  const [callBoard, setCallBoard] = useState(false);
  const [callControlBoard, setCallControlBoard] = useState(false);
  const [media] = useState();
  const [callEvent, setCallEvent] = useState(null);
  const [resize, setResize] = useState(false);
  const [mute, setMute] = useState(false);
  const [contactExist, setContactExist] = useState(null);
  const [toggleZone, setToggleZone] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [messageContent, setMessageContent] = useState('');
  const [messages, setMessages] = useState([]);
  const [displayProfilBar, setDisplayProfilBar] = useState(false);
  const [emitSound, setEmitSound] = useState(false);
  const inputRef = useRef(null);
  const [displayOptions, setDisplayOptions] = useState(false);

  const [updateProfil, setUpdateProfil] = useState();
  const [profil, setProfil] = useState();
  // CE GROUPE D'EFFET PERMET L'INITIALISATION DES DONNEES
  // APPELS A l'API

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://${window.location.hostname}:4000/user/all/`,
    }).then((res) => {
      if (res.data !== null) setUsers(res.data);
    });
  }, []);
  useEffect(() => {
    let data = {};
    data.user = sessionStorage.getItem('userId');
    axios({
      method: 'post',
      url: `http://${window.location.hostname}:4000/contact/all/`,
      data: data,
    }).then((res) => {
      if (res.data !== null) setContactList(res.data.contacts);
    });
  }, []);
  useEffect(() => {
    let data = {};
    data.user = sessionStorage.getItem('userId');
    axios({
      method: 'post',
      url: `http://${window.location.hostname}:4000/messages/all`,
      data: data,
    }).then((res) => {
      if (res.data !== null) setMessages(res.data);
    });
  }, []);
  // CET EFFET PERMET DE CONNECTER L'UTILISATEUR AU SERVER SOCKET.IO

  useEffect(() => {
    if (
      sessionStorage.getItem('user') &&
      sessionStorage.getItem('user') !== 'null'
    ) {
      socket.on('connect', function () {
        let userInfo = {};
        userInfo.username = sessionStorage.getItem('user');
        userInfo.userId = sessionStorage.getItem('userId');
        userInfo.room = `${sessionStorage.getItem('user')}_call_room`;

        socket.emit('session', { client: userInfo, contacts: contactList });
      });
    }
  }, [contactList, socket]);
  window.addEventListener('load', function () {
    if (
      sessionStorage.getItem('user') &&
      sessionStorage.getItem('user') !== 'null'
    ) {
      socket.emit('reload', { user: sessionStorage.getItem('user') });
    }
  });

  const Reload = () => {
    window.location.reload();
  };

  socket.on('call-signal', (data) => {
    setCallControlBoard(true);
    setPeer(data.peer);
    setInit(data.init);
    setInitProfil(data.initProfil);
    setInitName(data.user);
    setInitSignal(data.signal);
  });

  socket.on('AcceptCall', (data) => {
    setTransmission(data);
  });

  socket.on('call-event', function (data) {
    setCallEvent(data);
  });

  socket.on('initEnd', function (data) {
    setCallEvent(data);
    setTimeout(() => {
      setEnd(true);
    }, 2000);
  });

  socket.on('peerEnd', function (data) {
    setCallEvent(data);
    setTimeout(() => {
      setEnd(true);
    }, 2000);
  });

  socket.on('aborted', function () {
    alert('aborted');
    setEnd(true);
  });

  socket.on('updateMessages', function (data) {
    setMessages(data);
  });
  useEffect(() => {
    if (peerSignal === undefined) setPeerSignal(transmission);
  }, [peerSignal, transmission]);

  useEffect(() => {
    if (initPeer !== undefined && peerSignal !== undefined) {
      initPeer.signal(peerSignal);
      console.log(peerSignal);
      initPeer.on('stream', function (stream) {
        window.URL = stream;
        if (window.URL) {
          v2Ref.current.srcObject = stream;
        } else {
          v2Ref.current.srcObject = stream;
        }
      });
    }
  }, [initPeer, peerSignal]);

  useEffect(() => {
    if (end) {
      if (receivePeer !== undefined) {
        receivePeer.destroy();
        setCallBoard(false);
        Reload();
      } else {
        Reload();
      }
    }
  }, [end, callBoard]);

  useEffect(() => {
    if (end) {
      if (initPeer !== undefined) {
        initPeer.destroy();
        setCallBoard(false);
        Reload();
      } else {
        Reload();
      }
    }
  }, [end, callBoard]);

  useEffect(() => {
    mute ? (v2Ref.current.muted = true) : (v2Ref.current.muted = false);
  }, [mute]);

  useEffect(() => {
    if (currentUser.item !== undefined) {
      let user = messages.find((u) => u.user._id === currentUser.user._id);
      setCurrentUser(user);
    }
    if (currentUser._id !== undefined) {
      let user = messages.find((u) => u.user._id === currentUser._id);
      setCurrentUser(user);
    }
    if (emitSound) notif.play();
  }, [messages]);

  /**
   *CETTE FONCTION PERMET D'INITIALISER SIMPLE-PEER
   * @param {} type  ce parametre permet de mettre le parametre iniator a (true ou false)
   * @param {} stream  ce parametre transmet le stream de l'utilisateur dans simple-peer
   */
  function InitPeer(type, stream) {
    let peer = new Peer({
      initiator: type,
      trickle: false,
      stream: stream,
    });
    return peer;
  }
  /**
   *  CETTE FONCTION PERMET DE PASSER UN APPEL
   * @param {CE PARAMETRE REPRESENTE L'ELEMENT SUR LEQUEL ON CLIQUE (BOUTTON D'APPEL))} e
   */
  const call = (e) => {
    let callData = {
      peer: e.currentTarget.id,
      init: sessionStorage.getItem('userId'),
      initProfil: sessionStorage.getItem('profil'),
    };
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    navigator.getUserMedia(
      { video: true, audio: true },
      function (stream) {
        setPeer(callData.peer);
        setInit(callData.init);
        setCallBoard(true);
        v1Ref.current.srcObject = stream;
        v1Ref.current.muted = true;
        let peer = InitPeer(true, stream);
        peer.on('signal', function (data) {
          callData.signal = data;
          socket.emit('call', callData);
        });
        setInitPeer(peer);
      },
      function (e) {
        console.log(e);
      }
    );
  };
  /**
   * CETTE FONCTION PERMET DE REPONDRE A UN APPEL
   */
  const AcceptCall = () => {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    navigator.getUserMedia(
      { video: true, audio: true },
      function (stream) {
        setCallControlBoard(false);
        setCallBoard(true);
        v1Ref.current.srcObject = stream;
        v1Ref.current.muted = true;
        let peer = InitPeer(false, stream);
        peer.on('signal', function (data) {
          let callData = {
            signal: data,
            init: init,
            peer: sessionStorage.getItem('userId'),
          };
          socket.emit('ok', callData);
        });
        peer.on('stream', function (stream) {
          v2Ref.current.srcObject = stream;
        });
        peer.signal(initSignal);
        setReceivePeer(peer);
      },
      function (e) {
        console.log(e);
      }
    );
  };
  /**
   * CETTE FONCTION PERMET D'AJOUTER UN NOUVEAU CONTACT
   * @param {} event bouton pour ajouter un utilisateur
   */
  const addContact = (event) => {
    let data = {};
    let exist = contactList.find((e) => e._id === event.currentTarget.id);
    data.user_pseudo = sessionStorage.getItem('userId');
    data.pseudo = event.currentTarget.id;
    if (exist !== undefined) {
      setContactExist(`${exist.login} est déja dans votre liste de contacts`);
      setTimeout(() => {
        setContactExist(null);
      }, 3000);
    } else {
      axios({
        method: 'post',
        url: `http://${window.location.hostname}:4000/user/addNew`,
        data: data,
      }).then((res) => {
        setContactList(res.data.contacts);
        setContactExist(
          `${
            res.data.contacts[res.data.contacts.length - 1].login
          } fait désormais parti de vos contacts`
        );
        setTimeout(() => {
          setContactExist(null);
        }, 3000);
      });
    }
  };
  if (callEvent !== null && callEvent.status === 'failed') {
    setTimeout(() => {
      setEnd(true);
    }, 5000);
  }
  const EndCall = () => {
    let clients = {
      init: init,
      peer: peer,
    };
    if (callEvent !== null && callEvent.status === 'failed') {
      setEnd(true);
    } else {
      socket.emit('end', clients);
    }
  };
  const Denied = () => {
    socket.emit('denied', { peer: peer, init: init });
  };

  const onResize = () => {
    setResize(!resize);
  };
  const controlSound = () => {
    setMute(!mute);
  };
  const updateTime = () => {
    console.log(v2Ref.current.currentTime);
  };
  /**
   * Cette fonction permet de rechercher les utilisateurs
   * @param {*} e l'input de recherche
   */
  const findUser = (e) => {
    if (e.target.value !== '') {
      setUserFilter(
        users.filter(
          (user) =>
            user.login.includes(e.target.value) &&
            user._id !== sessionStorage.getItem('userId')
        )
      );
      setDisplayMessage(false);
    } else {
      setUserFilter([]);
    }
  };
  const onChangeZone = (e) => {
    setToggleZone(!toggleZone);
    if (messages.length !== 0) {
      let user = messages.find((u) => u.user._id === e.currentTarget.id);
      if (user === undefined) {
        let user = contactList.find((u) => u._id === e.currentTarget.id);
        setCurrentUser(user);
      } else {
        setCurrentUser(user);
      }
    } else {
      let user = contactList.find((u) => u._id === e.currentTarget.id);
      setCurrentUser(user);
    }
  };

  const exitChatZone = () => {
    setToggleZone(!toggleZone);
  };
  const onDisplayMessage = () => {
    setDisplayMessage(true);
  };
  const onDisplayContact = () => {
    setDisplayMessage(false);
  };

  const onManageMessageInput = (e) => {
    setMessageContent(e.target.value);
  };
  const sendMessage = () => {
    let message = {
      header: {
        emitter: sessionStorage.getItem('userId'),
        receiver: currentUser.user ? currentUser.user._id : currentUser._id,
      },
      content: messageContent,
      created_at: new Date(),
    };
    socket.emit('sendMessage', message);
    setMessageContent('');
  };

  useEffect(() => {
    scrollToBottom();
  });
  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      duration: 200,
      smooth: 'easeInOutQuint',
      containerId: 'ContainerElementID',
    });
  };
  const toggleProfilBar = () => {
    setDisplayProfilBar(!displayProfilBar);
  };

  const openFiles = () => {
    inputRef.current.click();
  };
  const toggleEmitSound = () => {
    setEmitSound(!emitSound);
  };
  const moreOptions = () => {
    setDisplayOptions(!displayOptions);
  };
  const onDeleteMessage = async (e) => {
    let data = {
      user: sessionStorage.getItem('userId'),
      msg: e.currentTarget.id,
      dialog_id: currentUser.item._id,
    };
    let res = await axios.post(
      `http://${window.location.hostname}:4000/messages/delete`,
      data
    );
    setMessages(res.data);
  };

  const UpdateProfil = () => {
    if (updateProfil !== undefined) {
    }
  };
  const onFileAdded = (event) => {
    setUpdateProfil(event.target.files);
  };
  const openFilesDialog = () => {
    inputRef.current.click();
  };
  const Logout = () => {
    socket.emit('session-out', {
      user: sessionStorage.getItem('user'),
      room: `${sessionStorage.getItem('user')}_call_room`,
    });
    sessionStorage.setItem('user', 'null');
    sessionStorage.setItem('profil', 'null');
    sessionStorage.setItem('userId', 'null');
  };
  useEffect(() => {
    if (updateProfil !== undefined) {
      const formData = new FormData();
      formData.append('profil', updateProfil[0]);
      formData.append('user', sessionStorage.getItem('userId'));
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
      };
      axios
        .post(
          `http://${window.location.hostname}:4000/user/UpdateProfil`,
          formData,
          config
        )
        .then((res) => {
          setProfil(res.data.profil);
        });
    }
  }, [updateProfil]);

  useEffect(() => {
    setProfil(sessionStorage.getItem('profil'));
  }, []);
  return (
    <div className='row main_home'>
      <div className='col-12 h-100 '>
        <div className='row h-100'>
          <Contactzone
            usersFilter={usersFilter}
            findUser={findUser}
            contactList={contactList}
            addContact={addContact}
            call={call}
            changeZone={onChangeZone}
            contactExist={contactExist}
            toggleZone={toggleZone}
            onDisplayMessage={onDisplayMessage}
            onDisplayContact={onDisplayContact}
            displayMessage={displayMessage}
            messages={messages}
          />
          <div
            className={`chatZone col-xs-12 col-md-7 col-lg-9 ${
              toggleZone ? '' : 'd-none'
            } d-md-block`}
          >
            <div className='row h-100'>
              <div className='col-12 col-md-8'>
                <div className='row h-100'>
                  <div className='col-12' style={{ height: '10%' }}>
                    <ChatzoneHeader
                      changeZone={exitChatZone}
                      currentUser={currentUser}
                      onCall={call}
                    />
                  </div>
                  <div
                    id='ContainerElementID'
                    ref={scrollRef}
                    className='col-12'
                    style={{
                      height: '80%',
                      overflow: 'scroll',
                      paddingTop: '7%',
                      background: '#ECE5DD',
                    }}
                  >
                    <h6
                      style={{
                        textAlign: 'center',
                        fontStyle: 'oblique',
                        fontSize: '0.7em',
                        color: 'gray',
                      }}
                      className=''
                    >
                      {currentUser !== undefined &&
                      currentUser.user !== undefined
                        ? `conversation avec ${currentUser.user.login}`
                        : currentUser.login
                        ? `conversation avec ${currentUser.login}`
                        : ''}
                    </h6>
                    <Chatzonebody
                      currentUser={currentUser}
                      onDisplayOptions={displayOptions}
                      onMoreOptions={moreOptions}
                      onDeleteMessage={onDeleteMessage}
                    />
                  </div>
                  <div
                    className='col-12'
                    style={{
                      height: '10%',
                      background: 'whitesmoke',
                    }}
                  >
                    <ChatzoneInput
                      currentUser={currentUser}
                      manageMessageInput={onManageMessageInput}
                      messageContent={messageContent}
                      onSendMessage={sendMessage}
                    />
                  </div>
                </div>
              </div>
              <div
                className='d-none d-md-block col-md-4'
                style={{
                  height: '100%',
                }}
              >
                <Navbar
                  onToggleProfilBar={toggleProfilBar}
                  display={displayProfilBar}
                  inputRef={inputRef}
                  openFiles={openFiles}
                  setDisplay={setDisplayProfilBar}
                  onToggleEmitSound={toggleEmitSound}
                />
                <Profilbar
                  displayProfilBar={displayProfilBar}
                  Logout={Logout}
                  userProfil={true}
                  onOpenFilesDialog={openFilesDialog}
                  inputRef={inputRef}
                  onFileAdded={onFileAdded}
                  profil={profil}
                />
                <CurrentInfoBar currentUser={currentUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Videocomponent
        callBoard={callBoard}
        phoneEnd={phoneEnd}
        onEnd={EndCall}
        phoneCall={phoneCall}
        video1={v1Ref}
        video2={v2Ref}
        resize={resize}
        onResize={onResize}
        mute={mute}
        onControlSound={controlSound}
        updateTime={updateTime}
      />
      <div
        className={`offset-md-3 alert ${
          callEvent !== null && callEvent.status === 'failed'
            ? 'alert-danger'
            : 'alert-primary'
        }`}
        style={{
          height: '50px',
          left: '25%',
          width: '50%',
          position: 'fixed',
          zIndex: 100000,
          top: `${callEvent !== null ? '0' : '-60px'}`,
          fontSize: '0.7em',
        }}
      >
        {callEvent !== null ? `${callEvent.msg} ...` : ''}
      </div>{' '}
      <Callboardcomponent
        callControlBoard={callControlBoard}
        AcceptCall={AcceptCall}
        initName={initName}
        initProfil={initProfil}
        phoneCall={phoneCall}
        phoneEnd={phoneEnd}
        updateTime={updateTime}
        onDenied={Denied}
      />
    </div>
  );
};
export default Home;