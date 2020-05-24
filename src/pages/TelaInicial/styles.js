import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Background = styled.ImageBackground`
  width: ${Dimensions.get('window').width + 'px'};
  height: ${Dimensions.get('window').height + 'px'};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #222;
`;
