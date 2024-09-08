export function checkColchetes(string: string): boolean {
    const equivalencies = {
      ')': '(',
      ']': '[',
      '}': '{',
    };
    const pile: string[] = [];

    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (['(', '[', '{'].includes(char)) {
        pile.push(char);
      } else if ([')', ']', '}'].includes(char)) {
        const last = pile.pop();
        if (last !== equivalencies[char]) {
          return false;
        }
      } else {
        return false;
      }
    }
    if (pile.length) {
      return false;
    }
    return true;
  }
  
  const args = process.argv.slice(2);
  const string = args[0] || '(';

  console.log(checkColchetes(string));