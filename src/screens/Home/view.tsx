import React from 'react';
import BaseText from '../../components/BaseText';
import {useUserContext} from '../../hooks/auth';

import {Container} from './styles';

const HomeView: React.FC = () => {
  const {user} = useUserContext();

  return (
    <Container>
      <BaseText size="h1">welcome {user.name}</BaseText>
    </Container>
  );
};

export default HomeView;
