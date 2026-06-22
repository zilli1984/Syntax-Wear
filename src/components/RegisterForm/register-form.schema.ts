import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

// ─── Schema principal ────────────────────────────────────────────────────────
export const registerFormSchema = z
    .object({
        firstName: z
            .string()
            .nonempty("Nome é obrigatório")
            .max(50, "Nome deve ter no máximo 50 caracteres")
            .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),

        lastName: z
            .string()
            .nonempty("Sobrenome é obrigatório")
            .max(50, "Sobrenome deve ter no máximo 50 caracteres")
            .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Sobrenome deve conter apenas letras"),

        email: z
            .email("Insira um e-mail válido"),  


        cpf: z
            .string()
            .nonempty("CPF é obrigatório")
            .refine(isValidCPF, "CPF inválido"),

        birthDate: z
            .string()
            .refine((val) => {
                const date = new Date(val);
                return !isNaN(date.getTime());
            }, "Data inválida")
            .refine((val) => {
                const date = new Date(val);
                const today = new Date();
                return date < today;
            }, "Data de nascimento não pode ser no futuro"),

        celFone: z
            .string()
            .nonempty("Numero de Telefone é obrigatorio")
            .min(10, "Numero de telefone invalido"),

        password: z
            .string()
            .min(1, "Senha é obrigatória")
            .min(8, "Senha deve ter pelo menos 8 caracteres")
            .regex(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula")
            .regex(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula")
            .regex(/[0-9]/, "Senha deve conter pelo menos um número")
            .regex(/[^A-Za-z0-9]/, "Senha deve conter pelo menos um caractere especial"),

        confirmPassword: z
            .string()
            .min(1, "Confirmação de senha é obrigatória"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem",
        path: ["confirmPassword"],
    });

// ─── Tipo inferido do schema ─────────────────────────────────────────────────
export type RegisterFormData = z.infer<typeof registerFormSchema>;

export function useRegisterUserForm() {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
        mode: "onBlur",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            cpf: "",
            birthDate: "",
            celFone: "",
            password: "",
            confirmPassword: "",
        },
        criteriaMode: "all",
    });

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        setError,
        reset,
    };
}
