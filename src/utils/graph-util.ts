export const GRAPH_WIDTH = 640;
export const GRAPH_HEIGHT = 396;

export const Y_AXIS_WIDTH = 140;
export const X_AXIS_HEIGHT = 87;

export const GRAPH_VIEW_WIDTH = GRAPH_WIDTH - Y_AXIS_WIDTH;
export const GRAPH_VIEW_HEIGHT = GRAPH_HEIGHT - X_AXIS_HEIGHT;

export const X_START_POSITON = Y_AXIS_WIDTH + 50;

export const NUMBER_OF_Y_AXIS = 10;

export const BAR_HEIGHT = 10;

export const FONT_SIZE = 12;
export const VIEW_MARGIN = 8;

export const TOOLTIP_MIN_WIDTH = 40;

export function getUpperLimit(counts: number[]): number {
  const max = Math.max(...counts);
  const result = (n: number) =>
    ((m) => m * Math.round(n / m))(10 ** (`${n}`.length - 1));

  return result(max);
}

export function getXMargin(numberOfData: number, targetWidth: number): number {
  return GRAPH_VIEW_WIDTH / numberOfData - targetWidth / 2;
}

export function getXAxisX(margin: number, index: number): number {
  return X_START_POSITON + margin * index;
}

export function getXAxisTextX(xAxisX: number, targetWidth: number): number {
  return xAxisX + targetWidth / 2;
}

export function getXAxisTexts(text: string): string[] {
  const texts = text.match(/(.{1,3})$|.{3}/g);

  if (texts === null) {
    return [text];
  }

  return texts;
}

export function getTspanY(
  y: number,
  index: number,
  fontSize: number = FONT_SIZE
): number {
  return y + fontSize * index;
}
