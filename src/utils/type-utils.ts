import { DocumentData } from "firebase/firestore";
import { getBorderColoos, getBgColoos } from "@/utils/color-utils";

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
    id: data.id,
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
  const bgColors: string[] = getBgColoos(value);
  const borderColors: string[] = getBorderColoos(value);

  return value.map((cost, index) => buildTotalChart(cost, bgColors[index], borderColors[index]));
};
