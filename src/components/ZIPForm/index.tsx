import { useState } from "react";
import { useZIPForm } from "./zip-form.schema";
import type { Address } from "../../interfaces/address";


const SHIPPING_BY_REGION: Record<string, number> = {
  Norte: 39.9,
  Nordeste: 29.9,
  "Centro-Oeste": 24.9,
  Sudeste: 14.9,
  Sul: 19.9,
};

export const ZIPForm = () => {
  const { register, handleSubmit, errors, isSubmitting } = useZIPForm();
  const [address, setAddress] = useState<Address | null>(null);
  const [addressError, setAddressError] = useState<string | null>(null);

  const onSubmit = async ({ cep }: { cep: string }) => {
    setAddressError(null);
    setAddress(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data: Address = await response.json();

      if (data.erro) {
        setAddressError("Regiao não suportada para entrega");
        return;
      }

      const shippingCost = SHIPPING_BY_REGION[data.regiao];

      setAddress({ ...data, shippingCost });
    } catch {
      setAddressError("Ocorreu um erro na busca pelo CEP, tente novamente mais tarde.");
    }
  };

  return (
    <>
      <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Insira seu Cep"
            maxLength={9}
            className={`border rounded-md p-3 focus:outline-none focus:ring-2 ${errors.cep ? "border-warning focus:ring-warning" : "border-border focus:ring-[#5433EB]"}`}
            {...register("cep")}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 disabled:opacity-50"
          >
            {isSubmitting ? "Calculando..." : "Calcular"}
          </button>
        </div>
        {errors.cep && (
          <p className="text-xs text-error mt-1">{errors.cep.message}</p>
        )}
      </form>

      {addressError && (
        <div className="mt-4 ">
            <p className="text-error text-sm">{addressError}</p>
        </div>
      )}

      {address && (
        <div className="mt-4">
          <p>
            <strong>Região: </strong>
            {address.regiao}
          </p>
          <p>
            <strong>Custo de entrega: </strong>R$ {address.shippingCost}
          </p>
        </div>
      )}
    </>
  );
};
