import { CustomerDTO } from "./customer.dto";
import { PaymentDTO } from "./payment.dto";

export class ReceivingBillDTO {
    id: number;
    dataEmissao: string;
    vencimentoOriginal: string;
    vencimento: string;
    competencia: string;
    nroDocumento: string;
    valor: number;
    saldo: number;
    historico: string;
    categoria: string;
    idFormaPagamento: string;
    portador: string;
    linkBoleto: string;
    vendedor: string;
    pagamento: PaymentDTO
    ocorrencia: string;
    cliente: CustomerDTO;
}