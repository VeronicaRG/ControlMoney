import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spaces.x4}px;
  background-color: ${({theme}) => theme.colors.neutral._05};
`;
export const Amount = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;
export const ViewDescription = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.neutral._00};
  border-radius: ${({theme}) => theme.radius.x6}px;
  padding: ${({theme}) => theme.spaces.x4}px;
  margin: ${({theme}) => theme.spaces.x4}px 0;
`;
export const SymbolDescription = styled.Image.attrs({resizeMode: 'contain'})`
  width: 40px;
  height: 40px;
  border-radius: ${({theme}) => theme.radius.x6}px;
`;
export const SymbolData = styled.Image.attrs({resizeMode: 'center'})`
  width: 40px;
  height: 40px;
  border-radius: ${({theme}) => theme.radius.x6}px;
`;
export const DescriptionTextInput = styled.TextInput.attrs(({theme}) => {
  return {placeholderTextColor: theme.colors.neutral._99};
})`
  width: 85%;
  height: 40px;
  font-size: ${({theme}) => theme.fontSizes.h5}px;
`;

export const ViewData = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-radius: ${({theme}) => theme.radius.x6}px;
  background-color: ${({theme}) => theme.colors.neutral._00};
  padding: ${({theme}) => theme.spaces.x4}px;
  margin: ${({theme}) => theme.spaces.x2}px 0;
`;
export const DataTextInput = styled.View`
  width: 85%;
  height: 40px;
  justify-content: center;
`;

export const AddExpense = styled.TouchableOpacity`
  margin: ${({theme}) => theme.spaces.x2}px;
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
  width: 60px;
  height: 60px;
  border-radius: ${({theme}) => theme.radius.x8}px;
  align-items: center;
  justify-content: center;
`;
export const AddIcon = styled.Image`
  width: 30px;
  height: 30px;
`;
