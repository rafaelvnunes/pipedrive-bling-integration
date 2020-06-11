import { ReceivingBillDTO } from "./receiving-bill.dto";

export class ResponseReceivingBillDTO {
    retorno: {
        contasreceber: [{
            contaReceber: ReceivingBillDTO
        }]
    }
}