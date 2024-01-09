/**
 * Checks if all the elements in array exist within the set.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
