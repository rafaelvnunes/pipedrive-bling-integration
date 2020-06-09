import { Expose } from "class-transformer";

export class OpportunityDTO {
    @Expose()
    name: string;

    @Expose()
    value: number;
}