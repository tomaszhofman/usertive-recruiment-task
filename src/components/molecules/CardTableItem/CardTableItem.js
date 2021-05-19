import React from 'react';

import styled from 'styled-components';

const StyledTableLink = styled.td`
  font-weight: 400;
  padding: 26px 36px 0 16px;
  color: ${({ theme }) => theme.colors.lightPurpleTertiary};
  line-height: 20px;
`;

const CardTableItem = (props) => {
  console.log(props.item.name);
  return (
    <tr>
      <StyledTableLink>{props.item.name}</StyledTableLink>
      <StyledTableLink>{props.item.type}</StyledTableLink>
    </tr>
  );
};

export default CardTableItem;
