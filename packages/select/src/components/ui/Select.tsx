import { Omit } from "@stenajs-webui/core";
import * as React from "react";
import { useMemo } from "react";
import SelectComponent from "react-select";
import { Props } from "react-select/src/Select";
import { useSelectTheme } from "../../hooks/useSelectTheme";
import { defaultSelectTheme, SelectTheme } from "../../SelectTheme";
import { createStylesFromTheme } from "../../util/StylesBuilder";
import { mergeStyles } from "../../util/StylesMerger";

export interface SelectProps<T> extends Omit<Props<T>, "theme"> {
  /**
   * The Select theme to use.
   */
  theme?: SelectTheme;
}

export const Select = <T extends {}>({
  theme = defaultSelectTheme,
  styles,
  ...selectProps
}: SelectProps<T>) => {
  const themeFields = useSelectTheme(theme);

  const selectStyles = useMemo(
    () => mergeStyles(createStylesFromTheme(theme, themeFields), styles),
    [theme, themeFields, styles]
  );

  return <SelectComponent styles={selectStyles} {...selectProps} />;
};