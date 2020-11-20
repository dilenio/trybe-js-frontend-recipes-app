import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

const Explore = (props) => {
  const { location } = props;
  const { pathname } = location;
  return (
    <div>
      <Header pathname={pathname} />
    </div>
  );
};

export default Explore;

Explore.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  pathname: PropTypes.string.isRequired,
};
