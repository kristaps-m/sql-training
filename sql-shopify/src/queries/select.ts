import {
  APPS,
  APPS_CATEGORIES,
  CATEGORIES,
  REVIEWS,
} from "../shopify-table-names";

export const selectCount = (table: string): string => {
  return `SELECT COUNT (*) as c from ${table}`;
};

export const selectRowById = (id: number, table: string): string => {
  return `SELECT * FROM ${table}
  WHERE id = ${id}`;
};

export const selectCategoryByTitle = (title: string): string => {
  return `SELECT * FROM ${CATEGORIES}
  WHERE title = '${title}'`;
};

export const selectAppCategoriesByAppId = (appId: number): string => {
  return `SELECT a.title AS app_title, c.id AS category_id, c.title AS category_title FROM ${APPS_CATEGORIES} ac
  JOIN ${APPS} a ON ac.app_id = a.id
  JOIN ${CATEGORIES} c ON ac.category_id = c.id
  WHERE app_id = ${appId}`;
};

export const selectUnigueRowCount = (
  tableName: string,
  columnName: string
): string => {
  return `SELECT count(DISTINCT ${columnName}) AS c FROM ${tableName}`;
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
