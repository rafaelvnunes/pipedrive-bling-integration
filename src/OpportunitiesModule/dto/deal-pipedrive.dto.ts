import { Expose } from "class-transformer";

export class PipedriveDealDTO {
    @Expose({name: 'pipedriveId'})
    id: number;

    @Expose({name: 'description'})
    title: string;

    @Expose()
    value: number;

    org_id: {
        name: string,
        address: string,
        cc_email: string
    };
}