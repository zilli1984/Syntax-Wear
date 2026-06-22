// ─── Validador de CPF ────────────────────────────────────────────────────────
export function isValidCPF(cpf: string): boolean {
    // Remove máscara
    const cleaned = cpf.replace(/\D/g, "");

    // Deve ter exatamente 11 dígitos
    if (cleaned.length !== 11) return false;

    // Rejeita CPFs com todos os dígitos iguais (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cleaned)) return false;

    // Validação do primeiro dígito verificador
    const calcDigit = (digits: string, factor: number) => {
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += parseInt(digits[i]) * factor--;
        }
        const remainder = (sum * 10) % 11;
        return remainder >= 10 ? 0 : remainder;
    };

    const firstDigit = calcDigit(cleaned.slice(0, 9), 10);
    if (firstDigit !== parseInt(cleaned[9])) return false;

    // Validação do segundo dígito verificador
    const secondDigit = calcDigit(cleaned.slice(0, 10), 11);
    if (secondDigit !== parseInt(cleaned[10])) return false;

    return true;
}
