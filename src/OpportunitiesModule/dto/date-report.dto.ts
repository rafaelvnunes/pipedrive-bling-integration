import { Opportunity } from "../schema";

export class DateReportDTO {
    date: string;
    totalValue: number;
    collection: Opportunity[];

    constructor(date: string, totalValue: number, opportunities: Opportunity[]) {
        this.date = date;
        this.totalValue = totalValue;
        this.collection = opportunities;
    }
}