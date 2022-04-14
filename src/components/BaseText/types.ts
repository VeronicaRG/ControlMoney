import {TextProps} from 'react-native';
import {theme} from '../../theme';

type FontSize = keyof typeof theme.fontSizes;

export interface BaseTextProps extends TextProps {
  accessibilityRole?: any;
  size: FontSize;
  color?: string;
}
