import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Profile = (props) => {
  const { location } = props;
  const { pathname } = location;
  return (
    <div>
      <Header pathname={ pathname } />
      <Footer />
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  pathname: PropTypes.string.isRequired,
};
