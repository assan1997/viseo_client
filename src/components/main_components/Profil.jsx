import React from 'react';

const Profil = ({ onOpenFilesDialog, inputRef, onFileAdded, profil }) => {
  return (
    <div style={{ height: '35%', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={onOpenFilesDialog}
      >
        <i
          style={{
            background: 'whitesmoke',
            padding: '10px',
            borderRadius: '150px',
            color: 'silver',
          }}
          className='fas fa-camera fa-2x'
        ></i>
      </div>
      {profil !== undefined ? (
        <img
          className='img-fluid'
          src={`http://localhost:4000/ressources/${profil}`}
        />
      ) : (
        ''
      )}
      <input type='file' hidden ref={inputRef} onChange={onFileAdded} />
    </div>
  );
};
export default Profil;
