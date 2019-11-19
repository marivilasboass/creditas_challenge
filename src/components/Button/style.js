import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {theme} from '~/theme/globalStyle';

export const WrapperButton = styled(RectButton)`
  width: 50px;
  margin-top: ${theme.defaultPadding.large};
  margin-bottom: ${theme.defaultPadding.large};
  align-self: center;
  background-color: ${theme.color.white};
  color: ${theme.color.black};
  align-items: center;
  align-self: center;
  padding: 8px;
  border-radius: ${theme.radius};
  border: 1px solid #000;
`;

export const ButtonText = styled.Text`
  font-size: ${theme.fontSize.small};
  align-self: center;
  color: ${theme.color.black};
`;
