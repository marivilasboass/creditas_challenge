import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '~/theme/globalStyle';

export const Section = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: ${theme.defaultPadding.small};
  padding-vertical: ${theme.defaultPadding.small}
  border: 1px solid #ccc;
  border-radius: ${theme.radius};
  margin-bottom: ${theme.defaultPadding.large};  
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.color.white,
  underlineColorAndroid: 'transparent',
})`
  text-align: center;
  flex: 1;
`;

export const IconButton = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: ${theme.defaultPadding.small};
  padding-vertical: ${theme.defaultPadding.small}
  border: 1px solid #ccc;
  border-radius: ${theme.radius};
  margin-bottom: ${theme.defaultPadding.large};  
`;
