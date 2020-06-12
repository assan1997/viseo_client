import React from 'react';
import Users from './users/Users';
import Messagelist from './Messagelist';
const Contactzone = ({
  usersFilter,
  findUser,
  contactList,
  addContact,
  call,
  changeZone,
  contactExist,
  toggleZone,
  onDisplayMessage,
  onDisplayContact,
  displayMessage,
  messages,
}) => {
  return (
    <div
      className={`contactZone col-xs-12 col-md-5 col-lg-3 ${
        toggleZone ? 'd-none' : ''
      } d-md-block`}
    >
      <div className='row h-100 ' style={{ position: 'relative' }}>
        <div className='col-12 '>
          <div className='row h-100'>
            <div className='col-12 finder_zone'>
              <input
                className='form-control'
                onKeyUp={findUser}
                type='text'
                name=''
                placeholder='Rechercher un utilisateur'
              />
              <i className='fas fa-search'></i>
              <hr />
            </div>

            <div className='col-12 w-100'>
              {usersFilter.length === 0 ? (
                ''
              ) : (
                <p
                  className='row alert alert-info'
                  style={{ borderRadius: '0' }}
                >
                  {contactExist === null
                    ? usersFilter.length === 1
                      ? `${usersFilter.length} utilisateur trouvé`
                      : `${usersFilter.length} utilisateurs trouvés`
                    : contactExist}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className='col-12 contact_zone_options'>
          <button
            onClick={onDisplayContact}
            className={`button  col-5  ${
              displayMessage ? '' : 'contact_zone_options_1'
            }`}
          >
            Contacts
          </button>
          <button
            onClick={onDisplayMessage}
            className={`button offset-2 col-5  ${
              displayMessage ? 'contact_zone_options_2' : ''
            }`}
          >
            Messages
          </button>
        </div>
        <div className='col-12  contactList '>
          <div
            className='row w-100'
            style={{
              position: 'absolute',
              left: `${displayMessage ? '-150%' : '14px'}`,
              transition: 'all ease-in-out .5s',
            }}
          >
            <Users
              users={usersFilter}
              add={true}
              onAddContact={addContact}
              onCall={null}
            />
            <Users
              users={contactList}
              onAddContact={null}
              add={false}
              onCall={call}
              changeZone={changeZone}
            />
          </div>
          <div
            className='row h-100 w-100'
            style={{
              position: 'absolute',
              transition: 'all ease-in-out .5s',
              right: `${displayMessage ? '14px' : '-150%'}`,
            }}
          >
            <Messagelist
              messages={messages}
              onCall={call}
              onAddContact={null}
              changeZone={changeZone}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contactzone;
