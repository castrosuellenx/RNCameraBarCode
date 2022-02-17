import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import { Dimensions } from 'react-native';

const Camera: React.FC = () => {
  const { navigate } = useNavigation();

  const getBarCode = (data: string, type: string) => {
    navigate('Result', {
      barcodedata: data,
      barcodetype: type,
    });
  };

  return (
    <RNCamera
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
      onBarCodeRead={({ data, type }) => {
        getBarCode(data, type);
      }}
      captureAudio={false}
      type={RNCamera.Constants.Type.back}
    />
  );
};

export default Camera;
