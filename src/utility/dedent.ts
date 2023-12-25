


/// util

interface DedentOptions {
  escapeSpecialCharacters?: boolean;
}

interface Dedent {
  (literals: string): string;
  (strings: TemplateStringsArray, ...values: unknown[]): string;
  withOptions: CreateDedent;
}

type CreateDedent = (options: DedentOptions) => Dedent;



/// export

const dedent: Dedent = createDedent({});
export default dedent;



/// function

function createDedent(options: DedentOptions) {
  dedent.withOptions = (newOptions: DedentOptions): Dedent =>
    createDedent({ ...options, ...newOptions });

  return dedent;

  function dedent(literals: string): string;
  function dedent(strings: TemplateStringsArray, ...values: unknown[]): string;

  function dedent(strings: TemplateStringsArray | string, ...values: unknown[]) {
    const raw = typeof strings === "string" ? [strings] : strings.raw;
    const { escapeSpecialCharacters = Array.isArray(strings) } = options;

    // first, perform interpolation
    let result = "";

    for (let i = 0; i < raw.length; i++) {
      let next = raw[i];

      if (escapeSpecialCharacters) {
        // handle escaped newlines, backticks, and interpolation characters
        next = next
          .replace(/\\\n[ \t]*/g, "")
          .replace(/\\`/g, "`")
          .replace(/\\\$/g, "$")
          .replace(/\\\{/g, "{");
      }

      result += next;

      if (i < values.length)
        result += values[i];
    }

    // now strip indentation
    const lines = result.split("\n");
    let mindent: null | number = null;

    for (const l of lines) {
      const m = l.match(/^(\s+)\S+/);

      if (m) {
        const indent = m[1].length;

        if (!mindent)
          mindent = indent; // this is the first indented line
        else
          mindent = Math.min(mindent, indent);
      }
    }

    if (mindent !== null) {
      const m = mindent; // appease TypeScript

      result = lines
        .map((l) => (l[0] === " " || l[0] === "\t" ? l.slice(m) : l))
        .join("\n");
    }

    return (
      result
        // dedent eats leading and trailing whitespace too
        .trim()
        // handle escaped newlines at the end to ensure they don't get stripped too
        .replace(/\\n/g, "\n")
        // handle backslash
        .replace(/&#92;/g, "\\")
    );
  }
}



/// via https://github.com/dmnd/dedent
/// forked to add line 95 for a specific command in Dolo Guide #01
