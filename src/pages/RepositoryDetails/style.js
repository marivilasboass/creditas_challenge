import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {theme} from '~/theme/globalStyle';

export const Indicator = styled.ActivityIndicator`
  flex: 1;
`;

export const ScrollViewWrapper = styled.ScrollView`
  width: 100%;
`;

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

export const Title = styled.Text`
  border-radius: ${theme.radius};
  padding: 0 16px;
  text-align: center;
  border: 1px solid #ccc;
  margin-bottom: ${theme.defaultPadding.large};
`;

export const Post = styled.View`
  flex-direction: row;
  padding-horizontal: ${theme.defaultPadding.small};
  padding-vertical: ${theme.defaultPadding.small};
  border-color: ${theme.color.gray};
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: ${theme.defaultPadding.small};
`;

export const MessageWrapper = styled.View`
  border: 1px solid #ccc;
  border-radius: ${theme.radius};
  padding-horizontal: ${theme.defaultPadding.small};
  padding-vertical: ${theme.defaultPadding.small};
  flex-grow: 1;
  max-width: 84%;
`;

export const Message = styled.Text`
  font-size: ${theme.fontSize.regular};
  text-align: left;
  color: ${theme.color.black};
`;
