import test from 'ava';

import { bmiCalculator } from '../bmi.calculator';

test('should return bmi', (t) => {
  const mass = 80;
  const height = 1.85;
  const expected = 23.37472607742878;

  const bmi = bmiCalculator(mass, height);

  t.is(bmi, expected);
});

test('should return 0 when height is 0', (t) => {
  const mass = 80;
  const height = 0;
  const expected = 0;

  const bmi = bmiCalculator(mass, height);

  t.is(bmi, expected);
});
