export interface XAxisData {
  count: number;
  label: string;
}

export interface BarGraphsProps {
  xAxisData: XAxisData[];
}

export interface GraphTooltipProps {
  count: number;
  x: number;
  y: number;
}

export interface GraphBaseProps {
  upperLimit: number;
  targetValue: number;
}

export interface GraphBarProps {
  width: number;
  height: number;
  y: number;
  x: number;
  index: number;
}
