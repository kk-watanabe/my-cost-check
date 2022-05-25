import { ColorType } from "@/const/color";

/**
 * index から ColorType を返す
 * @param index: number
 * @returns
 */
export const getColorType = (index: number): ColorType => {
  if (index === 0 || index === 6) {
    return ColorType.RED;
  } else if (index === 1 || index === 7) {
    return ColorType.ORANGE;
  } else if (index === 2 || index === 8) {
    return ColorType.YELLOW;
  } else if (index === 3 || index === 9) {
    return ColorType.GREEN;
  } else if (index === 4 || index === 10) {
    return ColorType.BLUE;
  } else if (index === 5 || index === 11) {
    return ColorType.PURPLE;
  } else {
    return ColorType.BLUE;
  }
};
