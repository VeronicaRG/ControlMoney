import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AddExpense = styled.TouchableOpacity`
  width: ${({theme}) => theme.componentSizes.button.width}px;
  height: ${({theme}) => theme.componentSizes.button.height}px;
  border-radius: ${({theme}) => theme.radius.x6}px;
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;
