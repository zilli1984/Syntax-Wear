import { useState } from "react";
import { useZIPForm } from "./zip-form.schema";
import type { Address } from "cluster";

const SHIPPING_BY_REGION: Record<string, number> = {
    "Norte": 39.90,
    "Nordeste": 29.90,
    "Centro-Oeste": 24.90,
    "Sudeste": 14.90,
    "Sul": 19.90,
}

export const ZIPForm = () => {
    const { register, handleSubmit, errors, isSubmitting } = useZIPForm();
    const [address, setAddress ] = useState<Address | null>(null)

    const onSubmit = async ({cep}: {cep:string}) => {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        const shippingCost = SHIPPING_BY_REGION[data.regiao];
        console.log(data.regiao)
        console.log(shippingCost)
    };

    return (
        <form className='flex flex-col gap-1' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-3'>
                <input
                    type="text"
                    placeholder='Insira seu Cep'
                    maxLength={9}
                    className={`border rounded-md p-3 focus:outline-none focus:ring-2 ${errors.cep ? "border-red-400 focus:ring-red-400" : "border-[#c0c0c0] focus:ring-[#5433EB]"}`}
                    {...register("cep")}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className='bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 disabled:opacity-50'
                >
                    Calcular
                </button>
            </div>
            {errors.cep && <p className="text-xs text-red-600 mt-1">{errors.cep.message}</p>}
        </form>
    );
}
