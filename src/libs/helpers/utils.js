/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Helpers - utils
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/

export const pickColorFromObj = (obj, name) => (
  obj[name] ? obj[name] : obj['default']
)

export const pickSizeFromObj = (obj, name) => (
  obj[name] ? obj[name] : obj['md']
)

export const pickDataFromObj = (obj, defaultKey) => (name) => (
  obj[name] ? obj[name] : obj[defaultKey]
)

export const capitalizeFirstLetter = (str) => (
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`
)

export const createExampleCode = (code) => code.trim()
