/**
 * French VAT number Calculator from SIREN or SIRET number.
 *
 * @param {number} sirenOrSiret siren or siret number
 * @returns {string} vat number
 */
export function frenchVatCalculator(sirenOrSiret: number): string {
  const length = Math.ceil(Math.log10(sirenOrSiret + 1));
  const siren: number | null =
    (length === 14 && +sirenOrSiret.toString().substr(0, 9)) ||
    (length === 9 && sirenOrSiret) ||
    null;
  if (!siren) {
    throw new InvalidSirenNumber();
  }

  const vatKey = (12 + 3 * siren) % 97;

  return `FR${vatKey}${siren}`;
}

export class InvalidSirenNumber extends Error {
  constructor() {
    super('Invalid SIREN number');
  }
}
