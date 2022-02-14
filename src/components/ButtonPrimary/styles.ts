import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondaryMain};
  margin-bottom: ${RFValue(30)}px;
  padding-vertical: ${RFValue(10)}px;
  padding-horizontal: ${RFValue(50)}px;
  border-radius: ${RFValue(150)}px;
  margin-top: ${RFValue(5)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.primaryMedium};
`;
