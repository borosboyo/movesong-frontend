export const hasSpecialCharactersOtherThanUnderScoreAndPoint = (username: string) => /[^\w.]/.test(username);
export const hasSpecialCharacters = (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password);
export const hasUppercaseCharacters = (password: string) => /[A-Z]/.test(password);
export const hasNumbers = (password: string) => /[0-9]/.test(password);
