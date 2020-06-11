export class CreatedPayingBillDTO {
    retorno: {
        contaspagar: [{
            contapagar: {
                id: number,
                nroDocumento: string,
                vencimento: string
            }
        }]
    }
}