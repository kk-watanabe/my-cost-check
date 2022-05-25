import { DocumentData } from "firebase/firestore";
import { graphBgColors, graphBorderColors } from "@/const/color";

/**
 * UserInfo type を作成する
 * @param doc DocumentData
 * @returns
 */
export const buildUserInfo = (doc: DocumentData) => {
  const data = doc.data();

  return {
    id: doc.id,
    email: data.email,
    isAdmin: data.is_admin,
    name: data.name,
  } as UserInfo;
};

/**
 * Cost type を作成する
 * @param doc DocumentData
 * @returns
 */
export const buildCosts = (doc: DocumentData) => {
  const data = doc.data();

  return {
    id: doc.id,
    name: data.name,
    dates: data.dates,
  } as Cost;
};

/**
 * TotalChart を作成
 * @param value Cost
 * @param backgroundColor string
 * @param borderColor string
 * @returns
 */
export const buildTotalChart = (value: Cost, backgroundColor: string, borderColor: string) => {
  const amounts = value.dates.map((date) => date.amount);

  return {
    label: value.name,
    data: amounts,
    backgroundColor,
    borderColor,
  };
};

/**
 * Cost Array type を作成する
 * Array 数により colorを変更する
 * @param value Cost[]
 * @returns
 */
export const buildTotalCharts = (value: Cost[]) => {
  const bgColors: string[] = [];
  const borderColors: string[] = [];

  if (value.length === 2) {
    bgColors.push(graphBgColors[0], graphBgColors[4]);
    borderColors.push(graphBorderColors[0], graphBorderColors[4]);
  } else if (value.length === 3) {
    bgColors.push(graphBgColors[0], graphBgColors[3], graphBgColors[4]);
    borderColors.push(graphBorderColors[0], graphBorderColors[3], graphBorderColors[4]);
  } else if (value.length === 4) {
    bgColors.push(graphBgColors[0], graphBgColors[2], graphBgColors[3], graphBgColors[4]);
    borderColors.push(graphBorderColors[0], graphBorderColors[2], graphBorderColors[3], graphBorderColors[4]);
  } else {
    bgColors.push(...graphBgColors);
    borderColors.push(...graphBorderColors);
  }

  return value.map((cost, index) => buildTotalChart(cost, bgColors[index], borderColors[index]));
};
