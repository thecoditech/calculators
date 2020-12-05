import test from 'ava';

import { frenchVatCalculator } from '../french-vat.calculator';

test('should return vat number when argument is a french siret number', (t) => {
  const siret = 44306184100047;
  const expected = 'FR64443061841';

  const vat = frenchVatCalculator(siret);

  t.is(vat, expected);
});

test('should return vat number when argument is a french siren number', (t) => {
  const siren = 443061841;
  const expected = 'FR64443061841';

  const vat = frenchVatCalculator(siren);

  t.is(vat, expected);
});

test('should return error when argument is not a valid siren or siret number', (t) => {
  const siren = 11;

  const error = frenchVatCalculator(siren);

  t.true(error instanceof Error);
});
