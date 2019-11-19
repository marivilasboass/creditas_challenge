import styled from 'styled-components/native';
import {theme} from '~/theme/globalStyle';
import {Dimensions} from 'react-native';

export const Wrapper = styled.TouchableWithoutFeedback`
  width: 100%;
`;

export const ItemWrapper = styled.View`
  border-bottom-width: 1px;
  border-color: ${theme.color.gray};
  margin-bottom: ${theme.defaultPadding.small};
`;

export const ItemText = styled.Text`
  font-size: ${theme.fontSize.big};
  color: ${theme.color.black};
`;

export const ItemDescription = styled.View`
  border-radius: ${theme.radius};
  border: 1px solid #ccc;
  align-items: center;
  padding: 24px;
  margin-bottom: ${theme.defaultPadding.large};
`;

export const Text = styled.Text`
  font-size: ${theme.fontSize.small};
  text-align: left;
  color: ${theme.color.black};
`;

export const Indicator = styled.ActivityIndicator`
  flex: 1;
`;

export const IndicatorAnimated = styled.ActivityIndicator`
  margin-vertical: ${theme.defaultPadding.large};
  margin-horizontal: ${theme.defaultPadding.large};
`;

export const ScrollWrapper = styled.ScrollView`
  width: 100%;
`;
