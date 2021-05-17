import styled from 'styled-components';

export const Dot = styled.div`
  background-color: ${({ color, theme }) => {
    if (color === 'pink') return theme.colors.pink;
    if (color === 'lightPurple') return theme.colors.lightPurple;
    if (color === 'mint') return theme.colors.mint;
    if (color === 'lightPink') return theme.colors.lightPink;
  }};
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;
