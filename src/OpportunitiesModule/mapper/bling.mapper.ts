import { Injectable } from "@nestjs/common";
import { Mapper } from "src/CommonsModule/mapper";
import { PipedriveDealDTO, BlingPaymentDTO, OpportunityDTO } from "../dto";

@Injectable()
export class BlingMapper extends Mapper<BlingPaymentDTO, OpportunityDTO> {
    constructor() {
        super(BlingPaymentDTO, OpportunityDTO)
    }

    toDto(paymentDto: Partial<BlingPaymentDTO>): OpportunityDTO {
        return super.toDto(paymentDto);
    }

    toEntity(dealDto: Partial<OpportunityDTO>): BlingPaymentDTO {
        let blingPaymentDto: BlingPaymentDTO = new BlingPaymentDTO();

        if(dealDto.blingId) blingPaymentDto.id = dealDto.blingId;
        if(dealDto.description) blingPaymentDto.historico = dealDto.description;
        blingPaymentDto.valor = dealDto.value;

        if(!dealDto.transaction) dealDto.transaction = {type: 'U'}
        blingPaymentDto.ocorrencia = {ocorrenciaTipo: dealDto.transaction.type}

        const contact: BlingPaymentDTO['cliente'] = {nome: dealDto.customer.name}
        if(dealDto.customer.address) contact.endereco = dealDto.customer.address;
        if(dealDto.customer.cc_email) contact.email = dealDto.customer.cc_email;

        if(blingPaymentDto.valor >= 0)
            blingPaymentDto.cliente = contact;
        else blingPaymentDto.fornecedor = contact;

        return blingPaymentDto;
    }

    toDtoList(dealsDto: Partial<BlingPaymentDTO>[]): OpportunityDTO[] {
        return super.toDtoList(dealsDto);
    }

    toEntityList(paymentsDto: Partial<OpportunityDTO>[]): BlingPaymentDTO[] {
        return paymentsDto.map(this.toEntity);
    }
}