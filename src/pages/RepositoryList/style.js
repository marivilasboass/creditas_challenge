import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {theme} from '~/theme/globalStyle';

export const Wrapper = styled.View`
  flex: 1;
  margin-top: 20%;
  background: ${theme.color.white};
  align-items: center;
  padding-left: ${theme.defaultPadding.small};
  padding-right: ${theme.defaultPadding.small};
  justify-content: center;
`;

export const Logo = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 80px;
  margin-bottom: ${theme.defaultPadding.large};
  resize-mode: contain;
  align-self: center;
`;

export const AnimatedWrapper = styled.Animated.View`
  height: 150px;
`;
