/**
 * Flattens an array objects into a single object.
 *
 * @param array - The array objects to be flattened.
 * @returns A single object that combines all properties from the input array.
 */
export default function flattenArray<T>(array: T[]): T {
  return array.reduce((result, current) => {
    return Object.assign(result, current)
  }, {}) as T
}
