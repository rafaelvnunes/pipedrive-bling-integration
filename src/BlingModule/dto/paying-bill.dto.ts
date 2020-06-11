import { SupplierDTO } from "./supplier.dto";
import { PaymentDTO } from "./payment.dto";

export class PayingBillDTO {
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
    portador: string;
    pagamento: PaymentDTO;
    ocorrencia: string;
    fornecedor: SupplierDTO;
}