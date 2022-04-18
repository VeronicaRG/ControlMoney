import LinearGradient from 'react-native-linear-gradient';
import {EdgeInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View<{safeArea: EdgeInsets}>`
  flex: 1;
  justify-content: center;
  padding-top: ${({safeArea}) => safeArea?.top || 10}px;
  background-color: ${({theme}) => theme.colors.neutral._05};
`;

export const View = styled.View`
  height: 58px;
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => theme.spaces.x3}px;
`;
export const GreetingView = styled.View`
  flex: 1;
  margin-left: ${({theme}) => theme.spaces.x4}px;
`;

export const User = styled.Image`
  width: 50px;
  height: 50px;
`;
export const Settings = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: ${({theme}) => theme.radius.x6}px;
  align-items: center;
`;
export const SettingIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const AddExpense = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
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
export const Icon = styled.Image`
  width: 30px;
  height: 30px;
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
