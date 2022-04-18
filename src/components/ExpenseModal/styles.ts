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
export const Options2 = styled.View`
  flex-direction: row;
`;

export const Edit = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  margin-right: ${({theme}) => theme.spaces.x4}px;
`;

export const Delete = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
`;

export const Close = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
`;

export const Symbol = styled.Image.attrs({resizeMode: 'contain'})`
  width: 70px;
  height: 70px;
`;
export const IconEdit = styled.Image.attrs({resizeMode: 'contain'})`
  width: 25px;
  height: 25px;
  margin-right: ${({theme}) => theme.spaces.x4}px;
`;
export const IconDelete = styled.Image.attrs({resizeMode: 'contain'})`
  width: 25px;
  height: 25px;
  margin-right: ${({theme}) => theme.spaces.x4}px;
`;
export const IconClose = styled.Image.attrs({resizeMode: 'contain'})`
  width: 35px;
  height: 35px;
  margin-right: ${({theme}) => theme.spaces.x4}px;
`;
export const Amount = styled.View`
  justify-content: space-between;
  justify-self: right;
`;
