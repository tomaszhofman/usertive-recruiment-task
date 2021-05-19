import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  width: 540px;
  max-height: 360px;
  z-index: 999;
  background: linear-gradient(0deg, #2b224a, #2b224a), #ffffff;
  box-shadow: 0px 12px 32px rgba(22, 13, 49, 0.4);
  border-radius: 16px;

  &:focus {
    outline: none;
  }
`;

const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      style={{ overlay: { backgroundColor: 'transparent' } }}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
    </ModalWrapper>
  );
};

export default Modal;
