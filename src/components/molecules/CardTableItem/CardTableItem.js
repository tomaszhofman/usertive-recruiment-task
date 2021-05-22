import React from 'react';
import styled from 'styled-components';

const StyledTableLink = styled.td`
  font-weight: 400;
  padding: 26px 36px 0 16px;
  color: ${({ theme }) => theme.colors.lightPurpleTertiary};
  line-height: 20px;
`;

const CardTableItem = ({ card, activeCard }) => {
  console.log(card);
  console.log(activeCard);
  return (
    <tr>
      <StyledTableLink>{card[activeCard.sortingProperty]}</StyledTableLink>
      <StyledTableLink>{card[activeCard.infoProperty]}</StyledTableLink>
    </tr>
  );
};

export default CardTableItem;
