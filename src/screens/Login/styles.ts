import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Symbol = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  justify-content: center;
  align-items: center;
  border: 4px solid ${({theme}) => theme.colors.secondary};
  margin: 40px 0;
`;

export const Degrade = styled(LinearGradient).attrs(({theme}) => {
  return {
    colors: [theme.colors.primary, theme.colors.neutral._00],
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
  return {placeholderTextColor: theme.colors.primary};
})`
  margin: 10px;
  border-radius: 10px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  border: 2px solid ${({theme}) => theme.colors.primary};
  padding: 10px;
  width: 300px;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  background-color: ${({theme}) => theme.colors.primary};
  margin: 10px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
