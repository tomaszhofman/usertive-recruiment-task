import { StyledTitle } from 'components/atoms/Title/Title';
import CardTableItem from 'components/molecules/CardTableItem/CardTableItem';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Close } from 'assets/arrows/close.svg';

import { icons } from 'data/iconsData';

const Wrapper = styled.div`
  padding: 20px 24px;
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
        background-color: ${({ theme }) => theme.colors.purple};
        color: ${({ theme }) => theme.colors.lightPurpleSecondary};
        font-weight: 600;
        border-radius: 4px;
        padding: 10px 36px 10px 16px;
      }
    }
  }
`;

const StyledIcon = styled.img`
  position: relative;
  right: -20px;
`;

const data = {
  crew: {
    col1: 'crew',
    col2: 'name',
    data: [],
  },
  capsules: {
    col1: 'crew',
    col2: 'name',
    data: [],
  },
  starlink: {
    col1: 'spaceTrack.OBJECT_NAME',
    col2: 'version',
    data: [],
  },
  rockets: {
    col1: 'name',
    col2: 'company',
    data: [],
  },
};

const CardDetails = ({ currentCard, activeCard, handleClose }) => {
  const [activeIcon, setActiveIcon] = useState(icons['arrows']);
  const [sort, setSort] = useState(false);
  const [active, setActive] = useState();

  useEffect(() => {
    if (activeCard === 'crew') {
      setActive(data.crew);
      data.crew.data = [...currentCard];
    }
    if (activeCard === 'capsules') {
      setActive(data.capsules);
      data.capsules.data = [...currentCard];
    }
    if (activeCard === 'starlink') {
      setActive(data.starlink);
      data.starlink.data = [...currentCard].slice(1, 50);
    }
    if (activeCard === 'rockets') {
      setActive(data.rockets);
      data.rockets.data = [...currentCard];
    }

    console.log(active);
    console.log(activeCard);
  }, []);

  if (active === undefined) {
    return <div>...Lodaing</div>;
  }

  const handleCard = () => {
    setActiveIcon(icons['arrowUp']);
    setSort(!sort);
    console.log(sort);
  };

  const cardsToShow = sort
    ? active.data.sort((a, b) => a.mass.kg - b.mass.kg)
    : active.data;
  console.log(active.sort);
  if (active.data === undefined) {
    return <div>...Lodaing</div>;
  }

  return (
    <Wrapper>
      <WrapperHead>
        <StyledTitle>{activeCard}</StyledTitle>
        <Close onClick={handleClose} />
      </WrapperHead>
      <StyledTable>
        <thead>
          <tr>
            <th>
              {active.col1}
              <StyledIcon
                onClick={handleCard}
                src={activeIcon}
                alt={activeIcon}
              />
            </th>
            <th>{active.col2}</th>
          </tr>
        </thead>
        <tbody>
          {cardsToShow.map((card) => {
            return <CardTableItem {...card} />;
          })}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default CardDetails;
