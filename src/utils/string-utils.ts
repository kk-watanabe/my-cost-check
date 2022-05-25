/**
 * '/' を '-' に変換する
 * @param value
 * @returns
 */
export const convertSlashToHyphen = (value: string) => {
  return value.replace("/", "-");
};

/**
 * '-' を '/' に変換する
 * @param value
 * @returns
 */
export const convertHyphenToSlash = (value: string) => {
  return value.replace("-", "/");
};
