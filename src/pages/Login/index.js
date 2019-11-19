import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Platform} from 'react-native';
import {Types, userLogin, userAddEmail, userReset} from '~/store/ducks/user';

import {Wrapper, Logo, FormWrapper, Input, LoginText} from './style';
import Button from '~/components/Button';

const Login = ({navigation}) => {
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocussed, setFocus] = useState(false);
  const keyboardBehavior = Platform.OS === 'android' ? 'padding' : 'position';

  /*
  onClickNext = () => userAddEmail({dispatch})({email});
  onClickBack = () => {
    dispatch({type: Types.LOGIN_RESET});
    setFocus(false);
  };
  onClickLogin = () =>
    userLogin({dispatch})({email: userState.email, password, navigation});
  onFocus = () => setFocus(true);
  onBlur = () => setFocus(false);
  */

  return (
    <Wrapper>
      <Logo source={require('~/assets/images/logo.png')} />
      <FormWrapper behavior={keyboardBehavior}>
        {userState.email ? (
          <>
            <LoginText>{userState.email}</LoginText>

            <Input
              placeholder="password"
              onChange={value => setPassword(value.nativeEvent.text)}
              secureTextEntry
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              autoFocus
            />
            <Button title="login" onPress={this.onClickLogin} />
            <Button title="back" onPress={this.onClickBack} />
          </>
        ) : (
          <>
            <Input
              placeholder="login"
              onChange={value => setEmail(value.nativeEvent.text)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
            />
            <Button title="next" onPress={this.onClickNext} />
          </>
        )}
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
