import React from 'react';
import {WrapperButton, ButtonText} from './style';

const Button = ({onPress, title}) => (
  <WrapperButton onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </WrapperButton>
);
export default Button;
