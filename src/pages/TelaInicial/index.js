import React from 'react';
import Lottie from 'lottie-react-native';

import { Container, Background, Text } from './styles';

import fundo_perfil from '../../assets/fundo_perfil.jpg';

import loading from '../../assets/loading.json';
import likeImg from '../../assets/like.json';

export default function TelaInicial() {
  return (
    <Background source={fundo_perfil}>
      <Container>
        <Text>TelaInicial</Text>
        <Lottie source={likeImg} autoPlay loop />
      </Container>
    </Background>
  );
}
