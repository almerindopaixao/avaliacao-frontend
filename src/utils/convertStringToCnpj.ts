export function convertStringToCnpj(text: string): string {
  const textReplace = `${text.slice(0, 2)}.${text.slice(2, 5)}.${text.slice(
    5,
    8,
  )}/${text.slice(8, 12)}-${text.slice(12, 14)}`;
  return textReplace;
}
