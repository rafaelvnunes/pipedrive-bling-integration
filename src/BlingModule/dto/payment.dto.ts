export class PaymentDTO {
    totalPago: number;
    totalJuro: number;
    totalDesconto: number;
    totalAcrescimo: number;
    totalTarifa: number;
    data: string;
    borderos: [
        {
            bordero: {
                id: number,
                conta: string,
                dataPagamento: string,
                valorPago: number,
                valorJuro: number,
                valorDesconto: number,
                valorAcrescimo: number,
                valorTarifa: number
            }
        }
    ]
}