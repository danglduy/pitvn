export function isNumeric(value: string) {
  return /^-?\d+$/.test(value)
}

export const narrowArray = <K extends string>(...arr: K[]) => arr
