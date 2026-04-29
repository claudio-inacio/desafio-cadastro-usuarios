import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Loader2, User, UserRoundCog, Mail, Smartphone, Building2 } from "lucide-react";
import { Button } from "../../../components/button";
import InputText from "../../../../../shared/components/inputs/text-input";
import { createUserFormSchema, type createUserFormInput, type createUserFormOutput, type CreateUserFormValues } from "../schemas/create-user-form.schema";
import { createUserDefaultValues } from "../config/CreateUser.defaultValues";
import StringMasks from "../../../../../utils/StringMasks";
import { useEffect } from "react";


interface CreateUserFormProps {
    onSuccess?: () => void;
    handleFormSubmit: (formData: createUserFormOutput) => void;
    isPending: boolean;
    resetForm: boolean;
    defaultValues: createUserFormInput;
}

export function CreateUserForm({ handleFormSubmit, isPending, resetForm, defaultValues }: CreateUserFormProps) {

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors, isValid, isDirty },
    } = useForm<CreateUserFormValues>({
        resolver: zodResolver(createUserFormSchema()),
        defaultValues: defaultValues || createUserDefaultValues,
        mode: 'onChange'
    });
    const buttonIsDisabled = isPending || !isDirty || !isValid

    useEffect(() => {
        if (resetForm) {
            reset()
        }
    }, [resetForm])

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="space-y-4 bg-gray-100 lg:w-1/3 p-2 w-full m-auto rounded-lg"
        >

            <InputText
                autoComplete="name"
                control={control}
                error={errors.name}
                id="input-name-id"
                placeholder="informe o nome completo"
                isLoading={!!isPending}
                disabled={!!isPending}
                name="name"
                inputLabel="Nome Completo"
                icon={User}
            />
            <InputText
                autoComplete="user_name"
                control={control}
                error={errors.user_name}
                id="input-user-name-id"
                placeholder="informe o nome de usuário"
                isLoading={!!isPending}
                disabled={!!isPending}
                name="user_name"
                inputLabel="Nome de usuário"
                icon={UserRoundCog}
            />
            <InputText
                autoComplete="email"
                control={control}
                error={errors.email}
                id="input-email-id"
                placeholder="informe o email"
                isLoading={!!isPending}
                disabled={!!isPending}
                name="email"
                inputLabel="Email"
                icon={Mail}
            />
            <InputText
                autoComplete="phone"
                control={control}
                error={errors.phone}
                id="input-phone-id"
                placeholder="informe o telefone"
                isLoading={!!isPending}
                disabled={!!isPending}
                formatValueMask={StringMasks.phoneMask}
                name="phone"
                inputLabel="Telefone"
                icon={Smartphone}
            />
            <InputText
                autoComplete="city"
                control={control}
                error={errors.city}
                id="input-city-id"
                placeholder="informe a cidade"
                isLoading={!!isPending}
                disabled={!!isPending}
                name="city"
                inputLabel="Cidade"
                icon={Building2}
            />

            <div className=" flex justify-end">

                <Button
                    variant={buttonIsDisabled ? "disabled" : "success"}
                    type="submit" disabled={buttonIsDisabled} label={isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {defaultValues ? 'Alterando...' : 'Cadastrando...'}
                        </>
                    ) : (
                        defaultValues ? "Alterar" : "Cadastrar"
                    )} />
            </div>

        </form>

    );
}