export function enumsContainsValue<T extends Record<string, U>, U = T[keyof T]>(
  enumObj: T,
  value: U
): boolean {
  return Object.values(enumObj).includes(value);
}
