import React from 'react';

export default React.createContext({
  userData: {
    username: ''
  },
  updateUserData: arg => {}
});
