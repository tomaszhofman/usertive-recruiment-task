import Modal from 'components/organisms/Modal/Modal';
import React, { useState } from 'react';

const useModal = () => {
  const [isOpen, setModalOpen] = useState();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return {
    Modal,
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
