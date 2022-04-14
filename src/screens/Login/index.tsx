import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useUserContext} from '../../hooks/auth';
import LoginView from './view';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [apelido, setApelido] = useState('');
  const navigation = useNavigation();
  const {setUser} = useUserContext();

  function signIn(emailUser, apelidoUser) {
    if (emailUser && apelidoUser) {
      setUser({
        apelido: apelidoUser,
        email: emailUser,
        status: 'ATIVO',
      });

      navigation.navigate('Home');
    }
  }

  function handleLogin() {
    signIn(email, apelido);
  }

  return (
    <LoginView
      valueEmail={email}
      onChangeTextEmail={text => setEmail(text)}
      valueApelido={apelido}
      onChangeTextApelido={text => setApelido(text)}
      onPress={handleLogin}
    />
  );
};

export default LoginScreen;
