export const numberTrunc = (n: number): string => {
  if (!n) return "0.0";

  let s = n.toString();
  if (s.length < 3) return;
  return s.slice(0, 3);
};
