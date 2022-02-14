import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryMain};
`;

export const StatusBar = styled.StatusBar``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: ${RFValue(30)}px;
`;

export const ContentCamera = styled.View`
  height: ${RFValue(250)}px;
  width: ${RFValue(250)}px;
  align-self: center;
  border-radius: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.secondaryMedium};
  position: absolute;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.grey};
  margin-top: ${RFValue(7)}px;
`;
