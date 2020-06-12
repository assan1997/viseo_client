import React from 'react';

const SignUpButton = ({ allFieldsOk, checkPassword }) => {
  return (
    <div className='form-group col-md-6'>
      {allFieldsOk && checkPassword ? (
        <button type='submit' className='btn btn-info'>
          Create account
        </button>
      ) : (
        ''
      )}
    </div>
  );
};
export default SignUpButton;
