export function cnpjValidation(cnpj: string): boolean {
  let isValid = true;

  if (!Number(cnpj)) isValid = false;
  if (cnpj == '11111111111111') isValid = false;
  if (cnpj == '22222222222222') isValid = false;
  if (cnpj == '33333333333333') isValid = false;
  if (cnpj == '44444444444444') isValid = false;
  if (cnpj == '55555555555555') isValid = false;
  if (cnpj == '66666666666666') isValid = false;
  if (cnpj == '77777777777777') isValid = false;
  if (cnpj == '88888888888888') isValid = false;
  if (cnpj == '99999999999999') isValid = false;

  return isValid;
}
