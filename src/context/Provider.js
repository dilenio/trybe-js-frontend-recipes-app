import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [email, setemail] = useState('');
  const [passWord, setpassWord] = useState('');

  const context = {
    email,
    setemail,
    passWord,
    setpassWord,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
