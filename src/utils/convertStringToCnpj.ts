export function convertStringToCnpj(text: string): string {
  const regex = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g;
  const textReplace = text.replace(regex, '$1.$2.$3/$4-$5');
  return textReplace;
}
