import React from 'react';
import { useTheme } from 'styled-components/native';

import { images } from '@/assets';
import * as S from './styles';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background}
      />

      <S.Title>BarCode{'\n'}Scanner</S.Title>

      <S.Image source={images.drawer} />

      <S.Button>
        <S.ButtonText>Start</S.ButtonText>
      </S.Button>

      <S.Subtitles>A simple barcode scanner for studies</S.Subtitles>
    </S.Container>
  );
};

export default Home;
