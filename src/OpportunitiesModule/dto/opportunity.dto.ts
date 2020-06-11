import { Expose } from "class-transformer";

export class OpportunityDTO {
    @Expose()
    _id: string;

    @Expose()
    value: number;

    @Expose({name: 'title'})
    description: string;
    
    @Expose()
    transaction: {
        type: string,
        dueDay?: number,
        dueDate?: string
    }
    
    @Expose({name: 'org_id'})
    customer: {
        name: string,
        address: string,
        cc_email: string
    }

    @Expose({name: 'id'})
    pipedriveId: number;

    @Expose()
    blingId: number;
}