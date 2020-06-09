import { Document } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose } from "class-transformer";

@Schema({collection: 'opportunities'})
export class Opportunity extends Document {
    @Prop()
    @Expose()
    name: string;

    @Prop()
    @Expose()
    value: number;
}

export const OpportunitySchema = SchemaFactory.createForClass(Opportunity)