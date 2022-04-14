import {Text} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../theme';
import {BaseTextProps} from './types';

const {fontSizes, fonts} = theme;

const fontStyles: {[index: string]: {size: number; font: string}} = {
  h1: {size: fontSizes.h1, font: fonts.regular},
  h2: {size: fontSizes.h2, font: fonts.semiBold},
  h3: {size: fontSizes.h3, font: fonts.regular},
  h4: {size: fontSizes.h4, font: fonts.regular},
  h5: {size: fontSizes.h5, font: fonts.medium},
  h6: {size: fontSizes.h6, font: fonts.medium},
  h7: {size: fontSizes.h7, font: fonts.semiBold},
  h8: {size: fontSizes.h8, font: fonts.medium},
  h9: {size: fontSizes.h9, font: fonts.regular},
  b1: {size: fontSizes.b1, font: fonts.regular},
  b2: {size: fontSizes.b2, font: fonts.semiBold},
  b3: {size: fontSizes.b3, font: fonts.medium},
  b4: {size: fontSizes.b4, font: fonts.regular},
};

export const StyledText = styled(Text)<BaseTextProps>`
  font-size: ${({size}) => fontStyles[size].size}px;
  font-family: ${({size}) => fontStyles[size].font};
`;
