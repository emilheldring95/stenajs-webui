import { InputSpinner } from "@stenajs-webui/elements";
import { color } from "@storybook/addon-knobs";
import * as React from "react";

export default {
  title: "elements/InputSpinner",
};

export const Standard = () => <InputSpinner />;

Standard.storyName = "standard";

export const WithCustomColor = () => (
  <InputSpinner color={color("trackColor", "red")} />
);

WithCustomColor.storyName = "with custom color";
