export interface LoginProps {
  onPress: () => void;
  valueEmail: string;
  onChangeTextEmail: (text: string) => void;
  valueNickname: string;
  onChangeTextNickname: (text: string) => void;
  loading: boolean;
}
