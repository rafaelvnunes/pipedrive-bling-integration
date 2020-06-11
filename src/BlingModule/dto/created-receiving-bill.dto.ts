export class CreatedReceivingBillDTO {
    retorno: {
        contasreceber: [{
            contareceber: {
                id: number,
                nroDocumento: string,
                vencimento: string
            }
        }]
    }
}