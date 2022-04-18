import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
})`
  margin: ${({theme}) => theme.spaces.x2}px;
  padding: ${({theme}) => theme.spaces.x4}px;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.neutral._00};
  border-radius: ${({theme}) => theme.radius.x4}px;
`;
export const Wraper = styled.TouchableOpacity``;
export const Symbol = styled.Image.attrs({resizeMode: 'contain'})`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
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
`;
export const LeftArrowIcon = styled.Image.attrs({resizeMode: 'contain'})`
  width: 20px;
  height: 20px;
  margin-left: ${({theme}) => theme.spaces.x8}px;
`;
