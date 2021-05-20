import React from 'react';

import styled from 'styled-components';

const StyledTableLink = styled.td`
  font-weight: 400;
  padding: 26px 36px 0 16px;
  color: ${({ theme }) => theme.colors.lightPurpleTertiary};
  line-height: 20px;
`;

const CardTableItem = (props) => {
  console.log(props);
  return (
    <tr>
      <StyledTableLink>{props?.name || 'default'}</StyledTableLink>
      <StyledTableLink>
        {props?.agency || props?.company || 'default'}
      </StyledTableLink>
    </tr>
  );
};

export default CardTableItem;
