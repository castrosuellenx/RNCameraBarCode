import React from 'react';
import { useTheme } from 'styled-components/native';

import { images } from '@/assets';
import ButtonPrimary from '@/components/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

const Home: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  const onStart = () => {
    navigate('BarCodeReader');
  };

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background}
      />

      <S.Title>BarCode{'\n'}Scanner</S.Title>

      <S.Image source={images.drawer} />

      <ButtonPrimary title="Start" onPress={onStart} />

      <S.Subtitles>A simple barcode scanner for studies</S.Subtitles>
    </S.Container>
  );
};

export default Home;
