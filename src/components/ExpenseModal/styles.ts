import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spaces.x4}px;
`;
export const Options = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({theme}) => theme.spaces.x4}px;
`;

export const Edit = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${({theme}) => theme.radius.x10}px;
`;

export const Delete = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${({theme}) => theme.radius.x10}px;
`;

export const Symbol = styled.View`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${({theme}) => theme.radius.x10}px;
`;
export const Amount = styled.View`
  justify-content: space-between;
  justify-self: right;
`;
