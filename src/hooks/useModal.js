import { useState } from 'react';

const useModal = () => {
  const [isOpen, setModalOpen] = useState();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return {
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
