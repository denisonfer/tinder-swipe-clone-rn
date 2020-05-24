import React, { useMemo, useRef, useState } from 'react';
import { Animated, PanResponder, Dimensions, Text } from 'react-native';

import {
  Container,
  BoxImage,
  ImagePerfil,
  LottieBox,
  LottieLike,
  LottieBoxDislike,
  LottieDislike,
  ButtonNav,
  ActionContainer,
} from './styles';

const usuarios = [
  {
    id: 1,
    nome: 'Aline Riscado',
    idade: 32,
    Localidade: 'Rio de Janeiro',
    foto:
      'https://midias.agazeta.com.br/2019/10/15/a-modelo-e-atriz-aline-riscado-77360-article.jpg',
  },
  {
    id: 2,
    nome: 'Simaria',
    idade: 37,
    Localidade: 'São Paulo',
    foto: 'https://midia.alagoas24horas.com.br/2019/11/Siamria.jpg',
  },
  {
    id: 3,
    nome: 'Sheila Viana',
    idade: 34,
    Localidade: 'Fortaleza',
    foto:
      'https://scontent.ffor28-1.fna.fbcdn.net/v/t1.0-9/11204445_888861917887618_9177719852958551709_n.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_ohc=7TFq1ULop1UAX9-22Xv&_nc_ht=scontent.ffor28-1.fna&oh=24912f2635e482bac0184532a191f0f2&oe=5EE47675',
  },
  {
    id: 4,
    nome: 'Aline Mineiro',
    idade: 28,
    Localidade: 'Rio de Janeiro',
    foto: 'https://i.redd.it/m3vkr9yrprr31.jpg',
  },
];

console.disableYellowBox = true;

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

import likeImg from '../../assets/like2.json';
import dislikeImg from '../../assets/dislike.json';

export default function Autenticacao({ navigation: { navigate } }) {
  const pan = new Animated.ValueXY();
  const [indexAtual, setIndexAtual] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      pan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 120) {
        Animated.spring(pan, {
          toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
        }).start(() => {
          setIndexAtual(indexAtual + 1),
            () => {
              pan.setValue({ x: 0, y: 0 });
            };
        });
      } else if (gestureState.dx < -120) {
        Animated.spring(pan, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
        }).start(() => {
          setIndexAtual(indexAtual + 1),
            () => {
              pan.setValue({ x: 0, y: 0 });
            };
        });
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          friction: 4,
        }).start();
      }
    },
  });

  const rotate = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  });

  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...pan.getTranslateTransform(),
    ],
  };

  const likeOpacity = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const dislikeOpacity = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });

  const nextCardOpacity = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });

  const nextCardScale = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  });

  //----

  return (
    <Container>
      {usuarios
        .map((item, index) =>
          index < indexAtual ? null : index == indexAtual ? (
            <BoxImage
              {...panResponder.panHandlers}
              key={item.id}
              useNativeDriver={true}
              style={rotateAndTranslate}
            >
              <LottieBox
                style={{ opacity: likeOpacity }}
                useNativeDriver={true}
              >
                <LottieLike source={likeImg} autoPlay loop></LottieLike>
              </LottieBox>

              <LottieBoxDislike
                style={{ opacity: dislikeOpacity }}
                useNativeDriver={true}
              >
                <LottieDislike
                  source={dislikeImg}
                  autoPlay
                  loop
                ></LottieDislike>
              </LottieBoxDislike>

              <ImagePerfil source={{ uri: item.foto }} />
            </BoxImage>
          ) : (
            <BoxImage
              key={item.id}
              useNativeDriver={true}
              style={[
                {
                  opacity: nextCardOpacity,
                  transform: [{ scale: nextCardScale }],
                },
              ]}
            >
              <ImagePerfil source={{ uri: item.foto }} />
            </BoxImage>
          )
        )
        .reverse()}
    </Container>
  );
}
