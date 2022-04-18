import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spaces.x4}px;
  background-color: ${({theme}) => theme.colors.neutral._05};
`;

export const ViewGoBack = styled.TouchableOpacity`
  width: 100%;
  align-self: flex-end;
  position: absolute;
  top: 1;
  margin: ${({theme}) => theme.spaces.x16}px 0;
`;

export const GoBack = styled.TouchableOpacity``;
export const IconArrowRight = styled.Image.attrs({resizeMode: 'center'})`
  width: 30px;
  height: 30px;
`;

export const Option = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.neutral._00};
  border-radius: ${({theme}) => theme.radius.x6}px;
  padding: ${({theme}) => theme.spaces.x4}px;
  margin: ${({theme}) => theme.spaces.x4}px 0;
`;
