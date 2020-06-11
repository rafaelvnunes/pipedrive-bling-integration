import { Controller, Get, Post, Body, Put } from "@nestjs/common";
import { API_PREFIX, API_VERSION, BLING_ENDPOINT, BILLS_ENDPOINT } from "src/CommonsModule/utils/constants";
import { BlingService } from "../service";
import { NewPayingBillDTO, CreatedPayingBillDTO, PayingBillDTO, CreatedReceivingBillDTO, NewReceivingBillDTO } from "../dto";
import { ReceivingBillDTO } from "../dto/receiving-bill.dto";

@Controller(
    `${API_PREFIX}/${API_VERSION}/${BLING_ENDPOINT}/${BILLS_ENDPOINT}`,
)
export class BlingController {
    constructor(private readonly service: BlingService) {}

    @Get()
    public async findAllBills(): Promise<any[]> {
        return this.service.findAll();
    }

    @Get('paying')
    public async findAllPayingBills(): Promise<PayingBillDTO[]> {
        return this.service.findAllPayingBills();
    }

    @Get('receiving')
    public async findAllReceivingBills(): Promise<ReceivingBillDTO[]> {
        return this.service.findAllReceivingBills();
    }
    
    @Post('paying')
    public async createPayingBill(@Body() newPayingBill: NewPayingBillDTO): Promise<CreatedPayingBillDTO> {
        return this.service.createPayingBill(newPayingBill);
    }

    @Post('receiving')
    public async createReceivingBill(@Body() newReceivingBill: NewReceivingBillDTO): Promise<CreatedReceivingBillDTO> {
        return this.service.createReceivingBill(newReceivingBill);
    }
}