import { Injectable } from "@nestjs/common";
import { AxiosResponse } from 'axios'
import { BlingHttp } from "./bling-http.service";
import { toXML } from 'jstoxml';
import { NewPayingBillDTO, CreatedPayingBillDTO, PayingBillDTO, NewReceivingBillDTO, CreatedReceivingBillDTO, ResponsePayingBillDTO, ResponseReceivingBillDTO } from "../dto";
import { ReceivingBillDTO } from "../dto/receiving-bill.dto";
import * as UTF8 from 'utf8';

@Injectable()
export class BlingService {
    constructor(private readonly httpService: BlingHttp) { }

    async createPayingBill(newPayingBill: NewPayingBillDTO): Promise<CreatedPayingBillDTO> {
        const xml: string = UTF8.encode(toXML({'contapagar': newPayingBill}));

        return this.httpService.create('contapagar', xml).toPromise()
            .then((response: AxiosResponse<CreatedPayingBillDTO>) => response.data);
    }

    async createReceivingBill(newReceivingBill: NewReceivingBillDTO): Promise<CreatedReceivingBillDTO> {
        const xml: string = UTF8.encode(toXML({'contareceber': newReceivingBill}));

        return this.httpService.create('contareceber', xml).toPromise()
            .then((response: AxiosResponse<CreatedReceivingBillDTO>) => response.data);
    }

    async findAllPayingBills(): Promise<PayingBillDTO[]> {
        return this.httpService.findAll('contaspagar').toPromise()
            .then((response: AxiosResponse<ResponsePayingBillDTO>) =>
            response.data.retorno.contaspagar.map(data => data.contapagar));
    }

    async findAllReceivingBills(): Promise<ReceivingBillDTO[]> {
        return this.httpService.findAll('contasreceber').toPromise()
            .then((response: AxiosResponse<ResponseReceivingBillDTO>) =>
            response.data.retorno.contasreceber.map(data => data.contaReceber));
    }

    async findAll(): Promise<any> {
        return Promise.all([this.findAllPayingBills(), this.findAllReceivingBills()]);
    }
}