import React from 'react';
import { useTheme } from 'styled-components/native';

import Camera from '@/components/Camera';
import Guidelines from '@/components/Guidelines';

import * as S from './styles';

const BarCodeReader: React.FC = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.secondaryMain}
      />

      <Camera />

      <S.Content>
        <S.Title>
          Point the camera at the{'\n'}
          barcode and wait.
        </S.Title>

        <Guidelines>
          <S.ContentGuide />
        </Guidelines>

        <S.Subtitle>Barcode</S.Subtitle>
      </S.Content>
    </S.Container>
  );
};

export default BarCodeReader;
