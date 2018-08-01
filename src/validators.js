export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
  value.trim() !== '' ? undefined : 'Cannot be empty';
export const email = value =>
  /^\S+@\S+$/.test(value) ? undefined : 'Must be a valid email address';
export const minValue = value => value >= 10000 && value <= 99999 ? undefined : 'must be 5 digits';
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;


