import styled, { css } from 'styled-components';

export const Row = styled.div(
  ({ fullScr }) => `
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  min-height: ${fullScr ? '100vh' : 'auto'};
  overflow: hidden;
`
);

export const Col = styled.div(
  ({
    gridColumn,
    Center,
    bottomRight,
    topRight,
    bottomLeft,
    Left,
    Right,
    maxWidth,
    textAlign,
  }) => `
    grid-row: 1;
    grid-column: ${gridColumn || '1 / -1'};

    ${Center &&
      css`
        align-self: center;
        justify-self: center;
      `}
    ${bottomRight &&
      css`
        align-self: end;
        justify-self: end;
      `}
    ${topRight &&
      css`
        justify-self: end;
      `}
    ${bottomLeft &&
      css`
        align-self: end;
      `}
    ${Left &&
      css`
        align-self: center;
      `}
    ${Right &&
      css`
        align-self: center;
        justify-self: end;
      `}
        
    max-width: ${maxWidth || 'auto'};
    text-align: ${textAlign || 'left'};
    width: 100%;
    z-index: 4;
`
);
