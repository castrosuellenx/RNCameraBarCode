import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

export type Props = {
  title: string;
} & TouchableOpacityProps;

const ButtonPrimary: React.FC<Props> = ({ title, ...res }) => {
  return (
    <S.Container activeOpacity={0.5} {...res}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default ButtonPrimary;
