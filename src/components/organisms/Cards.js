import Card from 'components/molecules/Card';
import React from 'react';
import { menu } from 'data/menuData';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

const Cards = ({ handleOpenCardDetails }) => {
  return (
    <Wrapper>
      {menu.map((item) => (
        <Card
          onClick={() => handleOpenCardDetails(item)}
          key={item.name}
          item={item}
        />
      ))}
    </Wrapper>
  );
};

export default Cards;
