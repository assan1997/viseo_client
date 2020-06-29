import React from 'react';
import { Link } from 'react-router-dom';
import Zone from './Zone';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
const Profilbar = ({
  displayProfilBar,
  Logout,
  onOpenFilesDialog,
  inputRef,
  onFileAdded,
  profil,
  onToggleProfilBar,
}) => {
  return (
    <div
      className='col-12 col-sm-4  col-md-3 '
      style={{
        right: `${displayProfilBar ? '0' : '-100%'}`,
        height: '100%',
        position: 'absolute',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <div className='row  h-100'>
        <div
          style={{
            height: '10%',
          }}
          onClick={onToggleProfilBar}
        >
          <CloseIcon />
        </div>
        <Zone
          onOpenFilesDialog={onOpenFilesDialog}
          inputRef={inputRef}
          onFileAdded={onFileAdded}
          profil={profil}
          size={'80%'}
        />
        <div className='logout_zone'>
          <Link to='/sign-in' onClick={Logout} className='link'>
            <h6>Se déconnecter</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Profilbar;
