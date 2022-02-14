import Guidelines from '@/components/Guidelines';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

const BarCodeReader: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  // Função simulando leitura do código de barras // TEMPORARIO
  useEffect(() => {
    setTimeout(() => {
      navigate('Result');
    }, 2000);
  }, [navigate]);

  return (
    <S.Container>
      <S.StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.secondaryMain}
      />

      <S.Title>
        Point the camera at the{'\n'}
        barcode and wait.
      </S.Title>

      <Guidelines>
        <S.ContentCamera />
      </Guidelines>

      <S.Subtitle>Barcode</S.Subtitle>
    </S.Container>
  );
};

export default BarCodeReader;
