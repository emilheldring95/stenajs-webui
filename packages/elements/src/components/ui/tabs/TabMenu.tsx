import * as React from "react";
import styles from "./TabMenu.module.css";
import { Row } from "@stenajs-webui/core";
import cx from "classnames";

export interface TabMenuProps {
  enableBorder?: boolean;
}

export const TabMenu: React.FC<TabMenuProps> = ({ children, enableBorder }) => {
  return (
    <Row
      className={cx(styles.tabMenu, { [styles.withBorder]: enableBorder })}
      gap={2}
      role={"tablist"}
    >
      {children}
    </Row>
  );
};
