const randIntException = (min: number, max: number, exp: number[]): number => {
  let n;
  exp = Array.isArray(exp) ? exp : [isNaN(exp) ? min - 1 : exp];

  while (true) {
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    if (exp.indexOf(n) < 0) return n;
  }
};

export function shuffleCards(cards: any, col: number = 5): any[] {
  let result;

  for (let i = 0; i <= col; i++) {
    result = cards.sort(() => randIntException(-1, 1, [])).reverse();
  }

  return result;
}
