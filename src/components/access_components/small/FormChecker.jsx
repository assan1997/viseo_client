import React from 'react';

const FormChecker = ({ checkPassword, allFieldsOk }) => {
  return (
    <div className='form-group col-md-12' style={{ textAlign: 'justify' }}>
      <p>
        {' '}
        <i
          style={{
            color: `${allFieldsOk ? 'green' : 'darkred'}`,
          }}
          className='fas fa-check'
        ></i>{' '}
        &nbsp;
        <span
          style={{ textDecoration: `${allFieldsOk ? 'none' : 'line-through'}` }}
        >
          All fields required
        </span>
      </p>
      <p>
        {' '}
        <i
          style={{
            color: `${checkPassword ? 'green' : 'darkred'}`,
          }}
          className='fas fa-check'
        ></i>
        &nbsp;{' '}
        <span
          style={{
            textDecoration: `${checkPassword ? 'none' : 'line-through'}`,
          }}
        >
          Password match
        </span>
      </p>
    </div>
  );
};
export default FormChecker;
