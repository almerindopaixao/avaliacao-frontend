export function cnpjValidation(cnpj: string): boolean {
  let isInvalid = false;

  if (!Number(cnpj)) isInvalid = true;
  if (cnpj == '11111111111111') isInvalid = true;
  if (cnpj == '22222222222222') isInvalid = true;
  if (cnpj == '33333333333333') isInvalid = true;
  if (cnpj == '44444444444444') isInvalid = true;
  if (cnpj == '55555555555555') isInvalid = true;
  if (cnpj == '66666666666666') isInvalid = true;
  if (cnpj == '77777777777777') isInvalid = true;
  if (cnpj == '88888888888888') isInvalid = true;
  if (cnpj == '99999999999999') isInvalid = true;

  return isInvalid;
}
