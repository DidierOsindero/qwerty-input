export const isInputStrong = (input: string): boolean => {
  if (
    input.length > 6 &&
    input.toLowerCase() !== input &&
    input.toUpperCase() !== input &&
    input.split("").some((el) => "!@£$%^&*?".includes(el))
  ) {
    return true;
  }

  return false;
};
