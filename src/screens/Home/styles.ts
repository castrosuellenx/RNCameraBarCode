import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StatusBar = styled.StatusBar``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.primaryMain};
  text-align: center;
  margin-bottom: ${RFValue(5)}px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 80%;
  height: 50%;
`;

export const Subtitles = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondaryMedium};
  margin-top: ${RFValue(30)}px;
`;
