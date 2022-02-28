import React, { FC } from 'react';
import './ErrorScreen.css';

interface ErrorScreenProps {
  errorMessage?: string,
}

const ErrorScreen: FC<ErrorScreenProps> = (props) => {
  const { errorMessage } = props;

  return (
    <div id="error-content">
      <h2>Error!</h2>
      <p>{errorMessage}</p>
    </div>
  );
};

ErrorScreen.defaultProps = {
  errorMessage: 'Something strange is a foot',
};

export default ErrorScreen;
