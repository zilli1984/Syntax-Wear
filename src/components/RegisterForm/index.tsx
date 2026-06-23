import { useRegisterUserForm } from "./register-form.schema";

export const RegisterForm = () => {
    const { register, errors, isSubmitting } = useRegisterUserForm();

    return (
        <form className="text-black">
            <div>
                <label className="text-xs text-gray-600">First Name*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.firstName ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`} type="text" {...register("firstName")} />
                {errors.firstName && <p className="text-xs text-red-600 mt-1">{errors.firstName.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-600">Last Name*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.lastName ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`} type="text" {...register("lastName")} />
                {errors.lastName && <p className="text-xs text-red-600 mt-1">{errors.lastName.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-600">Email*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.email ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`} type="email" {...register("email")} />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-600">CPF*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cpf ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`} type="text" maxLength={14} {...register("cpf")} />
                {errors.cpf && <p className="text-xs text-red-600 mt-1">{errors.cpf.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-600">Birth Date</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.birthDate ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`} type="date" {...register("birthDate")} />
                {errors.birthDate && <p className="text-xs text-red-600 mt-1">{errors.birthDate.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-600">Celular*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.celFone ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`} type="text" maxLength={15} {...register("celFone")} />
                {errors.celFone && <p className="text-xs text-red-600 mt-1">{errors.celFone.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-600">Password*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.password ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`} type="password" {...register("password")} />
                {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-600">Confirm Password*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`} type="password" {...register("confirmPassword")} />
                {errors.confirmPassword && <p className="text-xs text-red-600 mt-1">{errors.confirmPassword.message}</p>}
            </div>

            <button disabled={isSubmitting} className="bg-[#5433EB] text-white font-semibold uppercase rounded-md py-3 transsition-all hover:bg-[#4028c7] disable:oppacity-50 w-full cursor-pointer mt-4">
                {isSubmitting ? "Enviando..." : "Continuar"}
            </button>
        </form>
    );
};