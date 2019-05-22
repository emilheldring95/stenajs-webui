import styled from "@emotion/styled";
import {
  FontWeightProperty,
  TextDecorationProperty,
  UserSelectProperty,
  WhiteSpaceProperty
} from "csstype";
import * as React from "react";
import {
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps
} from "styled-system";
import { ThemeFontField } from "../../theme/theme-types/ThemeFonts";
import { ThemeFontSizeField } from "../../theme/theme-types/ThemeFontSizes";
import { ThemeFontWeightField } from "../../theme/theme-types/ThemeFontWeights";
import { Omit } from "../../types/Omit";

export interface TextProps
  extends TextThemeProps,
    TextBasePropsBase,
    Omit<SpanProps, "color"> {}

type SpanProps = JSX.IntrinsicElements["span"];

export interface TextThemeProps {
  fontSize?: ThemeFontSizeField | string;
  fontFamily?: ThemeFontField | string;
  fontWeight?: ThemeFontWeightField | FontWeightProperty;
}

export type TextBaseProps = TextBasePropsBase &
  SpanProps &
  TextBaseInternalProps &
  StyledSystemProps;

export interface TextBasePropsBase {
  /** The color of the text. */
  color?: string;
  whiteSpace?: WhiteSpaceProperty;
  /** Adds underline to text. */
  textDecoration?: TextDecorationProperty;
  /** Adds underline when mouse hovers over text. */
  hoverUnderline?: boolean;
  /** Makes text italic. */
  italic?: boolean;
  /** Disables the ability to select the text. */
  userSelect?: UserSelectProperty;
}

interface TextBaseInternalProps {
  /** Font weight to use. */
  fontWeight?: FontWeightProperty;
}

type StyledSystemProps = FontWeightProps & FontFamilyProps & FontSizeProps;

/**
 * NOTE:
 * Do not add color here, span already includes color.
 */
const SpanWithHover = styled.span<TextBaseProps>`
  ${({ color }) => (color ? `color: ${color};` : "")};
  ${fontSize};
  ${fontFamily};
  ${fontWeight};
  user-select: ${({ userSelect }) => userSelect};
  text-decoration: ${({ textDecoration }) => textDecoration};
  white-space: ${({ whiteSpace }) => whiteSpace};
  font-style: ${({ italic }) => (italic ? "italic" : "")};
  :hover {
    ${({ hoverUnderline }) =>
      hoverUnderline ? "text-decoration: underline;" : ""};
  }
`;

export const TextBase: React.FC<TextBaseProps> = SpanWithHover;