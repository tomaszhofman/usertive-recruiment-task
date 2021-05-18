import styled from 'styled-components';
import mouse from 'assets/icons/Pointer.png';

export const Button = styled.button`
  padding: 12px 32px;
  background-color: ${({ theme, mint }) =>
    mint ? theme.colors.mint : theme.colors.purple};
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  cursor: url(${mouse}), auto;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Inter';
`;
