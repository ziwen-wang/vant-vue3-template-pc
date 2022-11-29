import * as echarts from "echarts";
import { BarSeriesOption, LineSeriesOption } from "echarts/charts";
import {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption
} from "echarts/components";
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

export interface IObject {
  [key: string]: any;
}
