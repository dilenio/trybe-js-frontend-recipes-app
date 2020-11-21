import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Explore = (props) => {
  const { location } = props;
  const { pathname } = location;
  return (
    <div>
      <Header pathname={ pathname } />
      {pathname !== '/receitas-feitas'
      && pathname !== '/receitas-favoritas'
      && <Footer pathname={ pathname } />}
    </div>
  );
};

export default Explore;

Explore.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  pathname: PropTypes.string,
};

Explore.defaultProps = {
  pathname: 'explorar',
};
