import { calculatePasswordStrength } from "../src/password-calculator"

describe("calculatePasswordStrength", () => {
    test("should return 'Very Weak' for passwords with insufficient length", () => {
        expect(calculatePasswordStrength("12345")).toBe("Very Weak"); // слишком короткий
        expect(calculatePasswordStrength("abcde")).toBe("Very Weak"); // только буквы
    });

    test("should return 'Weak' for passwords with some improvements but still insufficient", () => {
        expect(calculatePasswordStrength("abcdefg1")).toBe("Weak"); // длина >= 8 и есть цифра
        expect(calculatePasswordStrength("ABCDEFG1")).toBe("Weak"); // длина >= 8, есть цифра и верхний регистр
    });

    test("should return 'Moderate' for passwords meeting more criteria", () => {
        expect(calculatePasswordStrength("Abcdefg1")).toBe("Moderate"); // длина >= 8, цифра, верхний и нижний регистры
        expect(calculatePasswordStrength("Abcde1!")).toBe("Moderate"); // длина >= 8, цифра, символ, верхний и нижний регистры
    });

    test("should return 'Strong' for strong passwords meeting all criteria", () => {
        expect(calculatePasswordStrength("Abcdefg123!@#")).toBe("Strong"); // длина >= 12, все проверки
        expect(calculatePasswordStrength("A1b2C3d4E5!@")).toBe("Strong"); // длина >= 12, смесь всех типов символов
    });
});
