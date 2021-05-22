import React, { useState } from 'react';

import Cards from 'components/organisms/Cards';
import Rocket from 'components/organisms/Rocket';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'hooks/useModal';

import cardServices from 'services/cards';
import CardDetails from 'components/organisms/CardDetails/CardDetails';

const DashBoard = () => {
  const [apiData, setCurrentApiData] = useState();
  const [activeCard, setActiveCard] = useState();
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  const handleOpenCardDetails = async (item) => {
    try {
      const response = await cardServices.getOne(item.id);
      setCurrentApiData(response);
      setActiveCard(item);
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
          apiData={apiData}
          activeCard={activeCard}
        />
      </Modal>
    </>
  );
};

export default DashBoard;
