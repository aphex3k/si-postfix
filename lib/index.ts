import Scale from "./scale";

/**
 * Converts the given number to a string with a scale-appropriate suffix
 * @param number the number to attach a postfix to
 * @param scale the scale to be used
 * See: https://en.wikipedia.org/wiki/Names_of_large_numbers
 */
export function postfix(number: number, scale: Scale = Scale.Short): string {
  if (number === 0) {
    return "0";
  }

  const postfixs =
    scale === Scale.Short
      ? ["", "k", "m", "b", "t"]
      : ["", "k", "m", "m", "b", "b", "t", "t"];
  let i = 0;
  const abs = Math.abs(number);
  while (abs / Math.pow(1000, i) >= 1.0 && i < postfixs.length) {
    i++;
  }
  let n = 1;
  if (scale === Scale.Long && i > 3 && !(i % 2)) {
    n = 2;
  }
  const round = number >= 0 ? Math.floor : Math.ceil;
  return "" + round(number / Math.pow(1000, i - n)) + postfixs[i - 1];
}
