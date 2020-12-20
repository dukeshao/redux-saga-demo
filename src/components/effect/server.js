import { getData } from '../../axios/axios'

export function getCategories(options) {
  return getData('/categories', options)
}
