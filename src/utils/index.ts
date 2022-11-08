export const numberTrunc = (n: number): string => {
  let s = n.toString();
  if (s.length < 3) return;
  return s.slice(0, 3);
};
