# SI Postfix

Convert a number into its postfixed si name equivalent based on the selected scale.

e.g. 1000 becomes 1k

## Usage

    import * as si from "si-postfix";

    const text = si.postfix(1000)

    console.log(text) // ==> "1k"

## Names of large numbers

While the task seems trivial, [long and short](https://en.wikipedia.org/wiki/Long_and_short_scales) scales are two of several naming systems for integer powers of ten which use some of the same terms with different magnitudes.

See the [names of large numbers](https://en.wikipedia.org/wiki/Names_of_large_numbers) on Wikipedia for more details.
