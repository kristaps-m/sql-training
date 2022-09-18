import { APPS_CATEGORIES, CATEGORIES, REVIEWS } from "../shopify-table-names";

export const selectCount = (table: string): string => {
  return `SELECT COUNT (*) as c from ${table}`;
};

export const selectRowById = (id: number, table: string): string => {
  return `SELECT ${id} FROM ${table}`;
};

export const selectCategoryByTitle = (title: string): string => {
  return `SELECT ${title} FROM ${CATEGORIES}`;
};

export const selectAppCategoriesByAppId = (appId: number): string => {
  return `SELECT * FROM ${APPS_CATEGORIES}
  WHERE app_id = ${appId}`;
};

export const selectUnigueRowCount = (
  tableName: string,
  columnName: string
): string => {
  return `SELECT ${columnName} FROM ${tableName}`;
};

export const selectReviewByAppIdAuthor = (
  appId: number,
  author: string
): string => {
  return `SELECT * FROM ${REVIEWS}
  WHERE app_id = ${appId} AND
  author = ${author}`;
};

export const selectColumnFromTable = (
  columnName: string,
  tableName: string
): string => {
  return `SELECT ${columnName} FROM ${tableName}`;
};
