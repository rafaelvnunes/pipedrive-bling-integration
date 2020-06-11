import { Injectable } from "@nestjs/common";
import { AxiosResponse } from 'axios'
import { BlingHttp } from "./bling-http.service";
import { toXML } from 'jstoxml';
import { NewPayingBillDTO, CreatedPayingBillDTO, PayingBillDTO, NewReceivingBillDTO, CreatedReceivingBillDTO } from "../dto";
import { ReceivingBillDTO } from "../dto/receiving-bill.dto";

@Injectable()
export class BlingService {
    constructor(private readonly httpService: BlingHttp) { }

    async createPayingBill(newPayingBill: NewPayingBillDTO): Promise<CreatedPayingBillDTO> {
        if (!newPayingBill.ocorrencia.ocorrenciaTipo)
            newPayingBill.ocorrencia.ocorrenciaTipo = 'U';

        const xml: string = toXML({'contapagar': newPayingBill});

        return this.httpService.create('contapagar', xml).toPromise()
            .then((response: AxiosResponse<CreatedPayingBillDTO>) => response.data);
    }

    async createReceivingBill(newReceivingBill: NewReceivingBillDTO): Promise<CreatedReceivingBillDTO> {
        const xml: string = toXML({'contareceber': newReceivingBill});
        return this.httpService.create('contareceber', xml).toPromise()
            .then((response: AxiosResponse<CreatedReceivingBillDTO>) => response.data);
    }

    async findAllPayingBills(): Promise<PayingBillDTO> {
        return this.httpService.findAll('contaspagar').toPromise()
            .then((response: AxiosResponse<PayingBillDTO>) => response.data);
    }

    async findAllReceivingBills(): Promise<ReceivingBillDTO> {
        return this.httpService.findAll('contasreceber').toPromise()
            .then((response: AxiosResponse<ReceivingBillDTO>) => response.data);
    }
}