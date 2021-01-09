import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export function BackButton(): JSX.Element {
  const history = useHistory();

  return (
    <div onClick={() => history.goBack()} className="back-button">
      <FaArrowLeft size={24} />
    </div>
  );
}
