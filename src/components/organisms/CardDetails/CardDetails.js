import { StyledTitle } from 'components/atoms/Title/Title';
import CardTableItem from 'components/molecules/CardTableItem/CardTableItem';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as Close } from 'assets/arrows/close.svg';
import useModal from 'hooks/useModal';

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
  margin: 25px 0;
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

const CardDetails = ({ currentCard, activeCard, handleClose }) => {
  return (
    <Wrapper>
      <WrapperHead>
        <StyledTitle>{activeCard}</StyledTitle>
        <Close onClick={handleClose} />
      </WrapperHead>
      <StyledTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentCard.map((el) => (
            <CardTableItem item={el} />
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default CardDetails;
