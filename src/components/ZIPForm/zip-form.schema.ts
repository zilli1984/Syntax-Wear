import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


// ─── Schema principal ────────────────────────────────────────────────────────
export const zipFormSchema = z.object({
    cep: z
        .string()
        .nonempty("CEP é obrigatório")
        .regex(/^\d{5}-?\d{3}$/, "CEP inválido"),
});

// ─── Tipo inferido do schema ─────────────────────────────────────────────────
export type ZIPFormData = z.infer<typeof zipFormSchema>;

export function useZIPForm() {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ZIPFormData>({
        resolver: zodResolver(zipFormSchema),
        mode: "onBlur",
        defaultValues: {
            cep: "",
        },
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
