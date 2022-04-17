import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useUserContext} from '../../hooks/auth';
import {authentication} from '../../Services/authServices';
import LoginView from './view';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [nickname, setNickname] = useState('');
  const navigation = useNavigation();
  const {setUser, user} = useUserContext();

  useEffect(() => {
    if (user?.token) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Logged'}],
      });
    }
  }, [user, navigation]);

  async function signIn() {
    if (email && nickname) {
      setLoading(true);
      const token = await authentication(email);

      setUser({
        email: email,
        nickname: nickname,
        token: token,
      });
      setLoading(false);
    }
  }

  return (
    <LoginView
      valueEmail={email}
      onChangeTextEmail={text => setEmail(text)}
      valueNickname={nickname}
      onChangeTextNickname={text => setNickname(text)}
      onPress={signIn}
      loading={loading}
    />
  );
};

export default LoginScreen;
