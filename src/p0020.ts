export function isValid(s: string): boolean {
  const delims: string[] = [];

  for (const ch of s) {
    switch (ch) {
      case "(":
        delims.push(")");
        break;
      case "[":
        delims.push("]");
        break;
      case "{":
        delims.push("}");
        break;
      case ")":
      case "]":
      case "}":
        if (delims.pop() !== ch) {
          return false;
        }
        break;
    }
  }

  return delims.length === 0;
}
