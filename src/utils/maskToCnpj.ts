export function maskToCnpj(cnpj: string): string {
  const text = cnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})({\d2})$/,
    '$1.$2.$3/$4-$5',
  );
  return text;
}
