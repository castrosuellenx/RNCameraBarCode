import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';

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
        height: '100%',
        width: '100%',
      }}
      onBarCodeRead={({ data, type }) => {
        getBarCode(data, type);
      }}
      captureAudio={false}
    />
  );
};

export default Camera;
