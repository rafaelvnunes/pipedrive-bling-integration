import { Expose } from "class-transformer";

interface contact {
    nome: string;
    endereco?: string;
    email?: string;
}

export class BlingPaymentDTO {
    @Expose({name: 'blingId'})
    id?: number;

    @Expose({name: 'value'})
    valor: number;

    @Expose({name: 'description'})
    historico: string;
    
    ocorrencia: {
        ocorrenciaTipo: string,
        diaVencimento?: number
    }

    cliente?: contact;
    fornecedor?: contact;
}