export const GRAPH_WIDTH = 640;
export const GRAPH_HEIGHT = 396;

export const Y_AXIS_WIDTH = 140;
export const X_AXIS_HEIGHT = 87;

export const GRAPH_VIEW_HEIGHT = GRAPH_HEIGHT - X_AXIS_HEIGHT;

export const FONT_SIZE = 12;
export const VIEW_MARGIN = 8;

export interface XAxisData {
  count: number;
  label: string;
}

export interface BarGraphsProps {
  xAxisData: XAxisData[];
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
