export const cnpjFormater = cnpj => {
  let formated = cnpj;
  if (cnpj && cnpj.length === 14) {
    formated = '';
    formated = formated.concat(
      cnpj.slice(0, 2),
      '.',
      cnpj.slice(2, 5),
      '.',
      cnpj.slice(5, 8),
      '/',
      cnpj.slice(8, 12),
      '-',
      cnpj.slice(12),
    );
  }

  return formated;
}

export const cnpjParser = formatedCnpj => formatedCnpj.replace(/[\.-]/g, '');
