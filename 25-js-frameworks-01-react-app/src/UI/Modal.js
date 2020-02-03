import React from 'react';

import './Modal.css';

const Modal = props => {
  return (
    <React.Fragment>
      <div className="backdrop"></div>
      <div className="modal">
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
