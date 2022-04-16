import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spaces.x4}px;
`;
export const Amount = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${({theme}) => theme.colors.primary};
`;
export const ViewDescription = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid ${({theme}) => theme.colors.neutral._00};
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${({theme}) => theme.spaces.x4}px;
`;
export const Symbol = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({theme}) => theme.colors.neutral._00};
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
  border: 2px solid ${({theme}) => theme.colors.neutral._00};
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${({theme}) => theme.spaces.x4}px;
`;
export const DataTextInput = styled.View`
  width: 85%;
  height: 40px;
  background-color: ${({theme}) => theme.colors.secondary};
  justify-content: center;
`;

export const AddExpense = styled.TouchableOpacity`
  width: 75px;
  height: 75px;
  border: 3px solid ${({theme}) => theme.colors.neutral._00};
  border-radius: ${({theme}) => theme.radius.x10}px;
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

// width: ${({theme}) = theme.componentSizes.button.width}px;
// height: ${({theme}) => theme.componentSizes.button.height}px;
// border-radius: ${({theme}) => theme.radius.x6}px;
// background-color: ${({theme}) => theme.colors.primary};
// justify-content: center;
// align-items: center;
