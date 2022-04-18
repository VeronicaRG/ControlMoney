import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spaces.x5}px;
`;

export const ViewButtonChangeLanguage = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  align-self: flex-end;
`;

export const ChangeLanguage = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: ${({theme}) => theme.radius.x6}px;
  justify-content: center;
  align-items: center;

  border: 3px solid ${({theme}) => theme.colors.neutral._00};
`;

export const Symbol = styled.Image.attrs({resizeMode: 'contain'})`
  width: 200px;
  height: 230px;
  justify-content: center;
  align-items: center;
  margin: ${({theme}) => theme.spaces.x10}px 0;
`;

export const Degrade = styled(LinearGradient).attrs(() => {
  return {
    colors: ['#C3DDED', '#DCD4ED', '#EDDCD4'],
    start: {x: -0.5, y: 0},
    end: {x: 1, y: 1},
  };
})`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs(({theme}) => {
  return {placeholderTextColor: theme.colors.neutral._60};
})`
  margin: ${({theme}) => theme.spaces.x3}px;
  border-radius: ${({theme}) => theme.spaces.x3}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  background-color: ${({theme}) => theme.colors.neutral._00};
  padding: ${({theme}) => theme.spaces.x3}px;
  width: 300px;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  margin: ${({theme}) => theme.spaces.x6}px 0;
`;

export const DegradeButton = styled(LinearGradient).attrs(({theme}) => {
  return {
    colors: [
      theme.colors.primary,
      theme.colors.secondary,
      theme.colors.tertiary,
    ],
    start: {x: -0.5, y: 0},
    end: {x: 1, y: 1},
  };
})`
  width: 150px;
  height: 40px;
  border-radius: ${({theme}) => theme.spaces.x5}px;
  justify-content: center;
  align-items: center;
`;
