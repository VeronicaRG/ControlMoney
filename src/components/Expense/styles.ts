import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({theme}) => theme.colors.neutral._50};
  padding: ${({theme}) => theme.spaces.x4}px;
`;
export const Symbol = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.neutral._00};
  border-radius: ${({theme}) => theme.radius.x6}px;
  margin-right: ${({theme}) => theme.spaces.x4}px;
`;
export const InfoView = styled.View`
  flex: 1;
  justify-content: space-between;
`;
export const Amount = styled.View`
  justify-content: space-between;
  justify-self: right;
`;
export const LeftArrow = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.radius.x6}px;
  margin-left: ${({theme}) => theme.spaces.x4}px;
`;
