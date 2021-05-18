import React, { useState } from 'react';

import Cards from 'components/organisms/Cards';
import Rocket from 'components/organisms/Rocket';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'hooks/useModal';

const DashBoard = () => {
  const [currentCard, setCurretCard] = useState();
  const { Modal, isOpen, handleCloseModal, handleOpenModal } = useModal();

  const handleOpenCardDetails = (id) => {
    console.log(id);
    setCurretCard(id);
    handleOpenModal();

    //connect with server
  };
  return (
    <>
      <Cards handleOpenCardDetails={handleOpenCardDetails} />
      <Rocket />
      {isOpen ? <Modal>{currentCard}</Modal> : null}
    </>
  );
};

export default DashBoard;
