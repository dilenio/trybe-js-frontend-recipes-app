import React, { useContext } from 'react';
import Context from '../../context/Context';
import './InProgress.css';

const InProgress = () => {
  const { inProgressId } = useContext(Context);
  return (
    <div>
      In progress recipe
      { inProgressId.id }
      { inProgressId.type }
    </div>
  );
};

export default InProgress;
