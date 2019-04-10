/**
 * BMI Calculator.
 *
 * @param {number} mass mass in kg
 * @param {number} height height in m
 * @returns {number} BMI in kg / m2
 */
export function bmiCalculator(mass: number, height: number) {
  if (height === 0) {
    return 0;
  }

  return mass / Math.pow(height, 2);
}
