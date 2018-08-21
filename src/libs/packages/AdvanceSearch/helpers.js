/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/helper
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

export const getSchemaDataById = (id, schema) => {
  const data = schema.filter((item) => item.id === id)
  return data.length > 0 ? data[0] : {}
}

export const createFilterKey = (id, type) => `${id}:${type}`

export const processFilterItemsEngine = (filterItems) => (
  filterItems.map((item) => item.id ? `${item.id}:"${item.value}"` : null)
)

export const isNumber = (n) => /^\d+(\.\d+)?$/.test(n)
