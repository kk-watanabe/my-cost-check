import { theme } from "twin.macro";

export const graphBgColors = [
  theme`colors.red.400`,
  theme`colors.orange.400`,
  theme`colors.yellow.400`,
  theme`colors.green.400`,
  theme`colors.blue.400`,
  theme`colors.purple.400`,
  theme`colors.red.500`,
  theme`colors.orange.500`,
  theme`colors.yellow.500`,
  theme`colors.green.500`,
  theme`colors.blue.500`,
  theme`colors.purple.500`,
];

export const graphBorderColors = [
  theme`colors.red.500`,
  theme`colors.orange.500`,
  theme`colors.yellow.500`,
  theme`colors.green.500`,
  theme`colors.blue.500`,
  theme`colors.purple.500`,
  theme`colors.red.600`,
  theme`colors.orange.600`,
  theme`colors.yellow.600`,
  theme`colors.green.600`,
  theme`colors.blue.600`,
  theme`colors.purple.600`,
];

export const ColorType = {
  RED: "red",
  ORANGE: "orange",
  YELLOW: "yellow",
  GREEN: "green",
  BLUE: "blue",
  PURPLE: "purple",
} as const;

export type ColorType = typeof ColorType[keyof typeof ColorType];
