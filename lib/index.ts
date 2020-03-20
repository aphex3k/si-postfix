import Scale from "./scale";

function postfix(number: number): string;
function postfix(number: number, scale: Scale): string;
function postfix(number: number, locale: string): string;
function postfix(number: number, decimals: number): string;

/**
 * Converts the given number to a string with a scale-appropriate suffix
 * @param number the number to attach a postfix to
 * @param scale the scale to be used
 * See: https://en.wikipedia.org/wiki/Names_of_large_numbers
 */
function postfix(
  number: number,
  p2?: Scale | string | number | undefined
): string {
  if (number < 1 && number >= 0) {
    if (typeof p2 === "number") {
      return number.toFixed(p2);
    } else {
      return "0";
    }
  }

  let scale = Scale.Short;

  if (p2 !== undefined) {
    if (p2 === Scale.Long || p2 === Scale.Short) {
      scale = p2!;
    }
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
  const r: number = (number * 1.0) / (Math.pow(1000.0, i - n) * 1.0);
  if (typeof p2 === "number") {
    return r.toFixed(p2).concat(postfixs[i - 1]);
  } else {
    const round = number >= 0 ? Math.floor : Math.ceil;
    return round(r)
      .toFixed(0)
      .concat(postfixs[i - 1]);
  }
}

export default postfix;
