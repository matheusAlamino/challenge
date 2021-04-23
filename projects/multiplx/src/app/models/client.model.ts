export interface Client {
    id: number,
    name: string,
    cpf: string,
    rg: string,
    rg_emitter: string,
    rg_date: string,
    birth_date: string,
    phone: string,
    email: string,
    nationality: string,
    profession: string,
    last_access: string,
    status: number,
    certificado_digital: number,
    certificado_digital_type: string,
    civil_status: number,
    own_client: number,
    tutelado: number,
    address: ClientAddress
}

export interface ClientAddress {
    cep: string,
    numero: string,
    complemento: string,
    logradouro: string,
    bairro: string,
    cidade: string,
    uf: string,
}
