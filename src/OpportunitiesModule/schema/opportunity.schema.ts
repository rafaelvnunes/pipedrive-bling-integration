import { Document } from "mongoose";
import { Schema, Prop, SchemaFactory, raw } from "@nestjs/mongoose";
import { Expose } from "class-transformer";

@Schema({collection: 'opportunities', timestamps: {createdAt: 'createdAt'}})
export class Opportunity extends Document {
    _id: string;

    @Prop()
    value: number;

    @Prop()
    description: string;

    @Prop(raw({
        type: {type: String},
        dueDay: {type: Number},
        dueDate: {type: String}
    }))
    transaction: Record<string, any>;

    @Prop(raw({
        name: {type: String},
        address: {type: String},
        cc_email: {type: String}
    }))
    customer: Record<string, any>

    @Prop()
    pipedriveId: number;

    @Prop()
    blingId: number;
}

export const OpportunitySchema = SchemaFactory.createForClass(Opportunity)