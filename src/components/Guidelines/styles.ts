import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFValue(254)}px;
  width: ${RFValue(254)}px;
  justify-content: center;
  border-radius: ${RFValue(5)}px;
`;

export const LinesTop = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const LineTopLeft = styled.View`
  height: ${RFValue(25)}px;
  width: ${RFValue(25)}px;
  border-top-left-radius: ${RFValue(5)}px;
  border-left-width: ${RFValue(4)}px;
  border-top-width: ${RFValue(4)}px;
  border-color: ${({ theme }) => theme.colors.white};
`;

export const LineTopRight = styled.View`
  height: ${RFValue(25)}px;
  width: ${RFValue(25)}px;
  border-top-right-radius: ${RFValue(5)}px;
  border-right-width: ${RFValue(4)}px;
  border-top-width: ${RFValue(4)}px;
  border-color: ${({ theme }) => theme.colors.white};
`;

export const LinesBottom = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LineBottomLeft = styled.View`
  height: ${RFValue(25)}px;
  width: ${RFValue(25)}px;
  border-bottom-left-radius: ${RFValue(5)}px;
  border-left-width: ${RFValue(4)}px;
  border-bottom-width: ${RFValue(4)}px;
  border-color: ${({ theme }) => theme.colors.white};
`;

export const LineBottomRight = styled.View`
  height: ${RFValue(25)}px;
  width: ${RFValue(25)}px;
  border-bottom-right-radius: ${RFValue(5)}px;
  border-right-width: ${RFValue(4)}px;
  border-bottom-width: ${RFValue(4)}px;
  border-color: ${({ theme }) => theme.colors.white};
`;
