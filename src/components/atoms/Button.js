import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 32px;
  background-color: ${({ theme, mint }) =>
    mint ? theme.colors.mint : theme.colors.purple};
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;

  height: 48px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Inter';
`;
