import React from 'react';

import * as S from './styles';

const Guidelines: React.FC = ({ children }) => {
  return (
    <S.Container>
      {children}

      <S.LinesTop>
        <S.LineTopLeft />
        <S.LineTopRight />
      </S.LinesTop>

      <S.LinesBottom>
        <S.LineBottomLeft />
        <S.LineBottomRight />
      </S.LinesBottom>
    </S.Container>
  );
};

export default Guidelines;
