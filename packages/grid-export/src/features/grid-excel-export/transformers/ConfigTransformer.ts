import {
  createColumnConfigsForRows,
  StandardTableConfig,
} from "@stenajs-webui/grid";
import { ZipCelXConfig, ZipCelXRow } from "zipcelx";
import {
  transformGroupHeaders,
  transformTableHeaders,
} from "./HeaderTransformer";
import { transformTableRow } from "./RowTransformer";
import { CustomCellFormatters } from "../../../common/CellFormatters";

export const createZipcelxConfig = <
  TItem,
  TColumnKey extends string,
  TColumnGroupKey extends string
>(
  filename: string,
  config: StandardTableConfig<TItem, TColumnKey, TColumnGroupKey>,
  items: Array<TItem>,
  formatters?: CustomCellFormatters<TItem, TColumnKey>
): ZipCelXConfig => {
  const groupConfigs = createColumnConfigsForRows(
    config.columnGroups,
    config.columnGroupOrder,
    config.columnOrder
  );

  const headerRows: Array<ZipCelXRow> = [];

  if (config.columnGroups) {
    headerRows.push(transformGroupHeaders(groupConfigs));
  }
  headerRows.push(transformTableHeaders(config, groupConfigs));

  return {
    filename,
    sheet: {
      data: [
        ...headerRows,
        ...items.map<ZipCelXRow>((item) =>
          transformTableRow(item, config, groupConfigs, formatters)
        ),
      ],
    },
  };
};