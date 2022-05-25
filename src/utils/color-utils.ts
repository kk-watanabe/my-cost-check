import { ColorType, graphBgColors, graphBorderColors } from "@/const/color";

/**
 * graphBgColor から ColorType を返す
 * @param graphBgColor: string
 * @returns
 */
export const getColorType = (graphBgColor: string): ColorType => {
  if (graphBgColor === graphBgColors[0] || graphBgColor === graphBgColors[6]) {
    return ColorType.RED;
  } else if (graphBgColor === graphBgColors[1] || graphBgColor === graphBgColors[7]) {
    return ColorType.ORANGE;
  } else if (graphBgColor === graphBgColors[2] || graphBgColor === graphBgColors[8]) {
    return ColorType.YELLOW;
  } else if (graphBgColor === graphBgColors[3] || graphBgColor === graphBgColors[9]) {
    return ColorType.GREEN;
  } else if (graphBgColor === graphBgColors[4] || graphBgColor === graphBgColors[10]) {
    return ColorType.BLUE;
  } else if (graphBgColor === graphBgColors[5] || graphBgColor === graphBgColors[11]) {
    return ColorType.PURPLE;
  } else {
    return ColorType.BLUE;
  }
};

/**
 * value の length から bg colors を取得する
 * @param value Cost[]
 * @returns
 */
export const getBgColoos = (value: Cost[]) => {
  const result: string[] = [];

  if (value.length === 2) {
    result.push(graphBgColors[0], graphBgColors[4]);
  } else if (value.length === 3) {
    result.push(graphBgColors[0], graphBgColors[3], graphBgColors[4]);
  } else if (value.length === 4) {
    result.push(graphBgColors[0], graphBgColors[2], graphBgColors[3], graphBgColors[4]);
  } else {
    result.push(...graphBgColors);
  }

  return result;
};

/**
 * value の length から border colors を取得する
 * @param value Cost[]
 * @returns
 */
export const getBorderColoos = (value: Cost[]) => {
  const result: string[] = [];

  if (value.length === 2) {
    result.push(graphBorderColors[0], graphBorderColors[4]);
  } else if (value.length === 3) {
    result.push(graphBorderColors[0], graphBorderColors[3], graphBorderColors[4]);
  } else if (value.length === 4) {
    result.push(graphBorderColors[0], graphBorderColors[2], graphBorderColors[3], graphBorderColors[4]);
  } else {
    result.push(...graphBorderColors);
  }

  return result;
};
