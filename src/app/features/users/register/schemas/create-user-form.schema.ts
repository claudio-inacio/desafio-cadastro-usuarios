
// import StringMasks from "@/shared/utils/StringMasks";

import { z } from "zod";
import StringMasks from "../../../../../utils/StringMasks";

export const createUserFormSchema = () =>
    z.object({
        city: z
            .string()
            .min(2, "Informe a cidade")
            .max(100, "A cidade deve ter no maximo 100 caracteres"),
        name: z
            .string()
            .min(2, "Informe o nome completo")
            .max(100, "O nome deve ter no maximo 100 caracteres"),
        user_name: z
            .string()
            .min(1, "Informe um usuário valido")
            .max(100, "O usuário deve ter no maximo 100 caracteres"),
        email: z
            .email('Informe um e-mail valido'),
        phone: z
            .string()
            .refine((value) => StringMasks.phoneIsValid(value), {
                message: "Informe um telefone válido",
            }),

    });

export type CreateUserFormValues = z.infer<
    ReturnType<typeof createUserFormSchema>
>;

export type createUserFormInput = z.input<
    ReturnType<typeof createUserFormSchema>
>;

export type createUserFormOutput = z.output<
    ReturnType<typeof createUserFormSchema>
>;