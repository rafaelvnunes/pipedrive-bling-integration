import { OpportunityDTO } from "../dto";

export class NewOpportunityDTO {
    readonly value: OpportunityDTO['value'];
    readonly description: OpportunityDTO['description']
    readonly transaction: OpportunityDTO['transaction']
    readonly customer: OpportunityDTO['customer']
    readonly pipedriveId: OpportunityDTO['pipedriveId']
}