import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {theme} from '~/theme/globalStyle';

export const Wrapper = styled.View`
  flex: 1;
  margin-top: 20%;
  background: ${theme.color.white};
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${Dimensions.get('window').width / 2};
  height: ${Dimensions.get('window').width / 2};
  margin-bottom: ${theme.defaultPadding.large};
  resize-mode: contain;
`;

export const FormWrapper = styled.KeyboardAvoidingView`
  width: 100%;
  padding-left: ${theme.defaultPadding.large};
  padding-right: ${theme.defaultPadding.large};
  padding-bottom: ${theme.defaultPadding.large};
`;

export const LoginText = styled.Text`
  font-size: ${theme.fontSize.regular};
  margin-top: ${theme.defaultPadding.small};
  margin-bottom: ${theme.defaultPadding.small};
  color: ${theme.color.black};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.color.white,
  underlineColorAndroid: 'transparent',
})`
  width: 100%;
  height: 40px;
  margin-top: ${theme.defaultPadding.small};
  margin-bottom: ${theme.defaultPadding.small};
  padding: 0px 15px;
  border: 1px solid #ccc;
  background-color: ${theme.color.white};
  text-align: center;
`;
