import * as React from "react";
import { useCallback } from "react";
import { Drawer, DrawerProps } from "@stenajs-webui/modal";
import { cssColor } from "@stenajs-webui/theme";
import { Column, SeparatorLine } from "@stenajs-webui/core";
import { SearchFilterPanelHeader } from "./SearchFilterPanelHeader";
import { useSearchFilterState } from "../context/SearchFilterStateContext";
import { useSearchFilterDispatch } from "../context/SearchFilterDispatchContext";
import { useSearchFilterActions } from "../context/SearchFilterActionsContext";

interface SearchFilterDrawerProps
  extends Omit<DrawerProps, "isOpen" | "onRequestClose"> {
  header?: string;
}

export const SearchFilterDrawer: React.FC<SearchFilterDrawerProps> = ({
  children,
  header,
  ...drawerProps
}) => {
  const {
    settings: { open },
  } = useSearchFilterState();
  const dispatch = useSearchFilterDispatch();
  const actions = useSearchFilterActions();

  const closeDrawer = useCallback(() => {
    dispatch(actions.closeFilters());
  }, [actions, dispatch]);

  return (
    <Drawer
      background={cssColor("--lhds-color-ui-50")}
      width={"370px"}
      isOpen={open}
      onRequestClose={closeDrawer}
      {...drawerProps}
    >
      <Column>
        <SearchFilterPanelHeader onRequestClose={closeDrawer} />
        <SeparatorLine />
        {children}
      </Column>
    </Drawer>
  );
};
