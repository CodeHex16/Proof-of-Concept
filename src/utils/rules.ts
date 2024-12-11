/**
 * Test if a value is a valid email address
 * @param {*} value the value to test
 * @returns true if the value is a valid email address, false otherwise
 */
const isEmail = (value: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(value);
}

/**
 * Test if a value is a valid password
 * @param {*} value the value to test
 * @returns true if the value is a valid password, false otherwise
 */
const isPassword = (value: string): boolean => {
  return value.length >= 8;
}

/**
 * Test if a value is empty
 * @param {*} value the value to test
 * @returns true if the value is empty, false otherwise
 */
const isEmpty = (value: string): boolean => {
  return value.length === 0;
}

export default {
  isEmail,
  isPassword,
  isEmpty,
};