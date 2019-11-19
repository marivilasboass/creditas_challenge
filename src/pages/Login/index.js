import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Platform} from 'react-native';
import {Types, userLogin, userAddEmail} from '~/store/ducks/user';

import {Wrapper, Logo, FormWrapper, Input, LoginText} from './style';
import Button from '~/components/Button';

const Login: () => React$Node = ({navigation}) => {
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setFocus] = useState(false);
  const keyboardBehavior = Platform.OS === 'android' ? 'padding' : 'position';

  function onClickNext() {
    userAddEmail({dispatch})({email});
  }
  function onClickBack() {
    dispatch({type: Types.LOGIN_RESET});
    setFocus(false);
  }

  function onClickLogin() {
    userLogin({dispatch})({email: userState.email, password, navigation});
  }

  function onFocus() {
    setFocus(true);
  }

  function onBlur() {
    setFocus(false);
  }

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
              onFocus={onFocus}
              onBlur={onBlur}
              autoFocus
            />
            <Button title="login" onPress={onClickLogin} />
            <Button title="back" onPress={onClickBack} />
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
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <Button title="next" onPress={onClickNext} />
          </>
        )}
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
