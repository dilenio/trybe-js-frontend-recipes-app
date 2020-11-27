import React, { useContext } from 'react';
import { useEffect } from 'react';
import Context from '../../context/Context';
import './InProgress.css';

const InProgress = () => {
  const { inProgressId } = useContext(Context);

  const recipeId = inProgressId.id;
  const recipeType = inProgressId.type;

  useEffect(() => {
  }, []);

  return (
    <div className="in-progress-wrapper">
      In progress recipe
      { recipeId || 'not fetch' }
      { recipeType || 'not fetch' }
    </div>
  );
};

export default InProgress;
