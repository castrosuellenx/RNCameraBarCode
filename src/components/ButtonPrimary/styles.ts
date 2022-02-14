import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.secondaryMain};
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
