export function maskToCnpj(text: string): string {
  text = text.replace(/^(\d{2})(\d)/, '$1.$2');
  text = text.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  text = text.replace(/\.(\d{3})(\d)/, '.$1/$2');
  text = text.replace(/(\d{4})(\d)/, '$1-$2');

  return text;
}
