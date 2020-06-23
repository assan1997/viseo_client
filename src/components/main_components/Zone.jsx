import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
const Zone = ({ onOpenFilesDialog, inputRef, onFileAdded, profil, size }) => {
  return (
    <div
      className='col-12'
      style={{ height: `${size}`, backgroundColor: 'whitesmoke' }}
    >
      <div
        style={{
          height: '50%',
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            display: 'flex',
            borderRadius: '100px',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: 'gray',
            backgroundImage: `url(http://localhost:4001/ressources/${profil})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <i
            onClick={onOpenFilesDialog}
            style={{
              background: 'whitesmoke',
              padding: '10px',
              borderRadius: '150px',
              color: 'silver',
              cursor: 'pointer',
            }}
            className='fas fa-camera'
          ></i>
        </div>
        <input type='file' hidden ref={inputRef} onChange={onFileAdded} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h6>
          {sessionStorage.getItem('user')}
          <EditIcon style={{ fontSize: '1em' }} />
        </h6>
      </div>
    </div>
  );
};
export default Zone;
