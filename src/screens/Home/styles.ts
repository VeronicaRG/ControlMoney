import {EdgeInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View<{safeArea: EdgeInsets}>`
  flex: 1;
  justify-content: center;
  padding-top: ${({safeArea}) => safeArea?.top || 10}px;
`;

export const View = styled.View`
  height: 58px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme}) => theme.spaces.x3}px;
`;

export const AddExpense = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: ${({theme}) => theme.radius.x6}px;
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
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
export const FlatListExpenses = styled.FlatList`
  flex: 1;
`;
