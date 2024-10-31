export function validatePassword(password: string) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);

  return hasUpperCase && hasNumber && hasLetter;
}
