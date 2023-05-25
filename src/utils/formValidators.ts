export const required = (value: unknown) => {
  return value ? undefined : "Required field"
}

export const removeSpaces = (string: string) => string.replace(/\s/gm, "")

export const validateOnString = (value: string) =>
  value && /^[a-zA-ZА-Яа-я]+$/gi.test(value)
    ? undefined
    : "Only letters allowed"

const MIN_WIDTH = 3

//example for validation length
export const minValueLength = (value: unknown) =>
  value && isNaN(value) && value.length >= MIN_WIDTH
    ? undefined
    : `Length should be greater than ${MIN_WIDTH}`

//example for validation phone
export const validatePhoneNumber = (value: string) =>
  value && !/^([0-9]{9})$/i.test(value) ? "invalidPhoneField" : undefined
