import React from 'react';
import { useTheme } from 'styled-components/native';

import { images } from '@/assets';
import ButtonPrimary from '@/components/ButtonPrimary';
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

      <ButtonPrimary title="Start" />

      <S.Subtitles>A simple barcode scanner for studies</S.Subtitles>
    </S.Container>
  );
};

export default Home;
