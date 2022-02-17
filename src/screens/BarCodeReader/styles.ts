import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  flex: 1;
`;

export const StatusBar = styled.StatusBar``;

export const WrapperOverlay = styled.View`
  height: ${windowHeight}px;
  width: ${windowWidth}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`;

export const Content = styled.View`
  height: ${windowHeight}px;
  width: ${windowWidth}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: ${RFValue(30)}px;
`;

export const ContentGuide = styled.View`
  height: ${RFValue(250)}px;
  width: ${RFValue(250)}px;
  align-self: center;
  border-radius: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.secondaryMedium}40;
  position: absolute;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.grey};
  margin-top: ${RFValue(7)}px;
`;
