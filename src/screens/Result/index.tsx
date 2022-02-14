import ButtonPrimary from '@/components/ButtonPrimary';
import { ResultProps } from '@/routes';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

const Result: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const route = useRoute();
  const { barcodedata, barcodetype } = route.params as ResultProps;

  const onTryAgain = () => {
    navigate('BarCodeReader');
  };

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background}
      />

      <S.Title>Result</S.Title>

      <S.Content>
        <S.TitleResult>Your barcode</S.TitleResult>
        <S.SubtitleResult>{barcodedata}</S.SubtitleResult>

        <S.TitleResult>Your barcode type</S.TitleResult>
        <S.SubtitleResultType>{barcodetype}</S.SubtitleResultType>
      </S.Content>

      <ButtonPrimary title="Try again" onPress={onTryAgain} />
    </S.Container>
  );
};

export default Result;
