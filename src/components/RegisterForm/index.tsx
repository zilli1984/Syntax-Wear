import { useRegisterUserForm } from "./register-form.schema";

export const RegisterForm = () => {
    const { register, errors, isSubmitting } = useRegisterUserForm();

    return (
        <form className="text-black">
            <div>
                <label className="text-xs text-gray-text">First Name*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.firstName ? "border-warning focus:ring-warning" : "border-border focus:ring-accent"}`} type="text" {...register("firstName")} />
                {errors.firstName && <p className="text-xs text-error mt-1">{errors.firstName.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Last Name*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.lastName ? "border-warning focus:ring-warning" : "border-border focus:ring-accent"}`} type="text" {...register("lastName")} />
                {errors.lastName && <p className="text-xs text-error mt-1">{errors.lastName.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Email*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.email ? "border-warning focus:ring-warning" : "border-border focus:ring-accent"}`} type="email" {...register("email")} />
                {errors.email && <p className="text-xs text-error mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">CPF*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cpf ? "border-warning focus:ring-warning" : "border-border focus:ring-accent"}`} type="text" maxLength={14} {...register("cpf")} />
                {errors.cpf && <p className="text-xs text-error mt-1">{errors.cpf.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Birth Date</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.birthDate ? "border-warning focus:ring-warning" : "border-border focus:ring-accent"}`} type="date" {...register("birthDate")} />
                {errors.birthDate && <p className="text-xs text-error mt-1">{errors.birthDate.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Celular*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.celFone ? "border-warning focus:ring-warning" : "border-border focus:ring-accent"}`} type="text" maxLength={15} {...register("celFone")} />
                {errors.celFone && <p className="text-xs text-error mt-1">{errors.celFone.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Password*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.password ? "border-warning focus:ring-warning" : "border-border focus:ring-accent"}`} type="password" {...register("password")} />
                {errors.password && <p className="text-xs text-error mt-1">{errors.password.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Confirm Password*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-warning focus:ring-warning" : "border-border focus:ring-accent"}`} type="password" {...register("confirmPassword")} />
                {errors.confirmPassword && <p className="text-xs text-error mt-1">{errors.confirmPassword.message}</p>}
            </div>

            <button disabled={isSubmitting} className="bg-accent text-white font-semibold uppercase rounded-md py-3 transsition-all hover:bg-accent- disable:oppacity-50 w-full cursor-pointer mt-4">
                {isSubmitting ? "Enviando..." : "Continuar"}
            </button>
        </form>
    );
};