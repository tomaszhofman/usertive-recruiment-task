import React, { useState } from 'react';

import Cards from 'components/organisms/Cards';
import Rocket from 'components/organisms/Rocket';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'hooks/useModal';

import cardServices from 'services/cards';
import CardDetails from 'components/organisms/CardDetails/CardDetails';

const DashBoard = () => {
  const [currentCard, setCurretCard] = useState();
  const [activeCard, setActiveCard] = useState();
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  const handleOpenCardDetails = async (id) => {
    try {
      const response = await cardServices.getOne(id);
      setCurretCard(response);
      setActiveCard(id);
    } catch (error) {
      console.log(error);
    }
    handleOpenModal();

    //connect with server
  };
  return (
    <>
      <Cards handleOpenCardDetails={handleOpenCardDetails} />
      <Rocket />
      <Modal isOpen={isOpen} handleClose={() => handleCloseModal()}>
        <CardDetails
          handleClose={() => handleCloseModal()}
          currentCard={currentCard}
          activeCard={activeCard}
        />
      </Modal>
    </>
  );
};

export default DashBoard;
