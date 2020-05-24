import styled from 'styled-components/native';
import { Image, Dimensions, Animated } from 'react-native';
import Lottie from 'lottie-react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const BoxImage = styled(Animated.View).attrs({
  useNativeDriver: true,
})`
  position: absolute;
  background: transparent;
  padding: 10px;
  width: ${Dimensions.get('window').width + 'px'};
  height: ${Dimensions.get('window').height - 120 + 'px'};
`;

export const LottieBox = styled(Animated.View).attrs({
  useNativeDriver: true,
})`
  position: absolute;
  transform: rotate(-30deg);
  top: -10px;
  left: -10px;
  width: 140px;
  height: 140px;
  z-index: 1000;
`;

export const LottieLike = styled(Lottie).attrs({
  resizeMode: 'cover',
})``;

export const LottieBoxDislike = styled(Animated.View).attrs({
  useNativeDriver: true,
})`
  position: absolute;
  transform: rotate(30deg);
  top: -10px;
  right: -10px;
  width: 140px;
  height: 140px;
  z-index: 1000;
`;
export const LottieDislike = styled(Lottie).attrs({
  resizeMode: 'cover',
})``;

export const ImagePerfil = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  border-radius: 10px;
  width: null;
  height: null;
`;

export const Text = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #222;
`;

export const ActionContainer = styled.View`
  border: 2px solid black;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const ButtonNav = styled.Button``;
