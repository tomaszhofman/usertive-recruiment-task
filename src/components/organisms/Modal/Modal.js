import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  width: 540px;
  min-height: 360px;

  background: linear-gradient(0deg, #2b224a, #2b224a), #ffffff;
  box-shadow: 0px 12px 32px rgba(22, 13, 49, 0.4);
  border-radius: 16px;
`;

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.prepend(modalNode);

    return () => {
      modalContainer.removeChild();
    };
  }, []);
  return ReactDOM.createPortal(
    <ModalWrapper>{children}</ModalWrapper>,
    document.getElementById('modal-container')
  );
};

export default Modal;
