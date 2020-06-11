import { PayingBillDTO } from "./paying-bill.dto";

export class ResponsePayingBillDTO {
    retorno: {
        contaspagar: [{
            contapagar: PayingBillDTO
        }]
    }
}