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

export const Content = styled.View`
  width: ${RFValue(300)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
  padding-vertical: ${RFValue(40)}px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const TitleResult = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.secondaryMain};
  margin-bottom: ${RFValue(5)}px;
`;

export const SubtitleResult = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondaryMedium};
  margin-bottom: ${RFValue(30)}px;
`;

export const SubtitleResultType = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondaryMedium};
`;
