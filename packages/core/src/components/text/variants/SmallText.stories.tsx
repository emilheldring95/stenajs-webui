import { defaultTheme, SmallText } from "@stenajs-webui/core";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

storiesOf("core/Text/SmallText", module)
  .add("standard", () => (
    <SmallText
      color={select("Color", Object.keys(defaultTheme.colors), "primaryText")}
    >
      {text("Text", "That is some nice text, right there!")}
    </SmallText>
  ))
  .add("hover color", () => (
    <SmallText
      hoverColor={select(
        "Color",
        Object.keys(defaultTheme.colors),
        "successGreen"
      )}
    >
      {text("Text", "That is some nice text, right there!")}
    </SmallText>
  ))
  .add("with underline", () => (
    <SmallText textDecoration={"underline"}>
      That is some nice text, right there!
    </SmallText>
  ))
  .add("with underline on hover", () => (
    <SmallText hoverUnderline>That is some nice text, right there!</SmallText>
  ))
  .add("with selection disabled", () => (
    <SmallText userSelect={"none"}>This text can not be selected</SmallText>
  ))
  .add("with font weights", () => (
    <div>
      <div>
        <SmallText fontWeight={"normal"}>This text is normal.</SmallText>
      </div>
      <div>
        <SmallText fontWeight={"bold"}>This text is bold.</SmallText>
      </div>
      <div>
        <SmallText fontWeight={"light"}>This text is light.</SmallText>
      </div>
    </div>
  ));
