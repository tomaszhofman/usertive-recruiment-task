import { StyledTitle } from 'components/atoms/Title/Title';
import CardTableItem from 'components/molecules/CardTableItem/CardTableItem';
import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Close } from 'assets/arrows/close.svg';

import { icons } from 'data/iconsData';

const Wrapper = styled.div`
  padding: 30px 24px;
`;

const WrapperHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 10px 0 0 0;
  font-size: 14px;
  max-height: 276px;
  width: 100%;

  overflow-y: scroll;
  max-height: 250px;
  display: block;

  thead {
    text-align: left;
    position: sticky;
    top: 0;

    th {
      &:nth-child(1) {
        width: 246px;
        height: 40px;
        background-color: ${({ theme }) => theme.colors.darkPurple};
        color: ${({ theme }) => theme.colors.lightPurpleSecondary};
        font-weight: 600;
        border-radius: 4px;
        padding: 10px 36px 10px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &:nth-child(2) {
        position: relative;
        z-index: -1;
        left: -5px;
        width: 246px;
        height: 40px;
        background-color: ${({ theme }) => theme.colors.lightPurpleBackground};
        color: ${({ theme }) => theme.colors.lightPurpleSecondary};
        font-weight: 600;
        border-radius: 4px;
        padding: 10px 36px 10px 16px;
      }
    }
  }
`;

const DropShadow = styled.div`
  position: absolute;

  background-color: red;
  width: 487px;
  height: 52px;
  bottom: 15px;

  background: linear-gradient(180deg, rgba(43, 34, 74, 0) 0%, #2b224a 100%);
`;

const StyledIcon = styled.img`
  position: relative;
  right: -20px;
  opacity: ${({ activeIcon }) => (activeIcon !== icons.arrows ? '1' : '0')};
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const CardDetails = ({ apiData, activeCard, handleClose }) => {
  const [activeIcon, setActiveIcon] = useState(icons.arrows);
  const [cardsToShow, sortCardsToShow] = useState(apiData);

  function sortByArrowState() {
    if (activeIcon === icons.arrows) {
      setActiveIcon(icons.arrowUp);
      sortCardsToShow(cardsToShow.sort(activeCard.sortingFunctionASC));
    } else if (activeIcon === icons.arrowUp) {
      setActiveIcon(icons.arrowDown);
      sortCardsToShow(cardsToShow.sort(activeCard.sortingFunctionDESC));
    } else if (activeIcon === icons.arrowDown) {
      setActiveIcon(icons.arrows);
      sortCardsToShow(apiData);
    }
  }

  const handleClickOnArrow = () => {
    sortByArrowState();
  };
  return (
    <Wrapper>
      <WrapperHead>
        <StyledTitle>{activeCard.name}</StyledTitle>
        <Close onClick={handleClose} />
      </WrapperHead>
      <StyledTable>
        <thead>
          <tr>
            <th>
              {activeCard.col1}
              <StyledIcon
                onClick={handleClickOnArrow}
                src={activeIcon}
                alt={activeIcon}
                activeIcon={activeIcon}
              />
            </th>
            <th>{activeCard.col2}</th>
          </tr>
        </thead>
        <tbody>
          {cardsToShow.map((card) => {
            return (
              <CardTableItem
                key={card.name}
                card={card}
                activeCard={activeCard}
              />
            );
          })}
        </tbody>
      </StyledTable>
      <DropShadow />
    </Wrapper>
  );
};

export default CardDetails;
