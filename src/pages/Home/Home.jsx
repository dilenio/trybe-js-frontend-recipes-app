import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './Home.css';

const Home = (props) => {
  const { location } = props;
  const { pathname } = location;
  return (
    <div>
      <Header pathname={ pathname } />
    </div>
  );
};

export default Home;

Home.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  pathname: PropTypes.string.isRequired,
};
