export type Address = {
    cep: string;
    logradouro: string;
    complemento: string
    bairro: string;
    unidade: string;
    localidade: string;
    uf: string;
    ibge:string;
    estado: string;
    gia: string;
    regiao: string;
    erro?: boolean;
    shippingCost: number;
};