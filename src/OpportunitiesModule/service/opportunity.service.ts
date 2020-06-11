import { Injectable } from "@nestjs/common";
import { OpportunityRepository } from "../repository/opportunity.repository";
import { Opportunity } from "../schema/opportunity.schema";
import { NewOpportunityDTO, PipedriveDealDTO, OpportunityDTO, BlingPaymentDTO } from "../dto";
import { OpportunityHttp } from "./";
import { DealMapper, BlingMapper, OpportunityMapper } from "../mapper";
import { BLING_ENDPOINT, PIPEDRIVE_ENDPOINT } from "src/CommonsModule/utils/constants";

@Injectable()
export class OpportunityService {
    constructor(
        private readonly dealMapper: DealMapper,
        private readonly blingMapper: BlingMapper,
        private readonly repository: OpportunityRepository,
        private readonly mapper: OpportunityMapper,
        private readonly http: OpportunityHttp
    ) { }

    public async create(newOpportunityDto: NewOpportunityDTO): Promise<Opportunity> {
        return this.repository.create(newOpportunityDto);
    }

    public async refresh(): Promise<Opportunity[]> {
        const wonDeals: PipedriveDealDTO[] = await this.http.get(`${PIPEDRIVE_ENDPOINT}/deals/status/won`)
            .toPromise().then(response => response.data['data']);
        const wonDealsModel: OpportunityDTO[] = this.dealMapper.toEntityList(wonDeals);

        await this.repository.upsert(wonDealsModel);

        const opportunitiesUpdated = await this.findAll();
        this.exportToBling(this.mapper.toDtoList(opportunitiesUpdated));

        return opportunitiesUpdated;
    }

    public async findAll(): Promise<Opportunity[]> {
        return this.repository.findAll();
    }

    public async findByDate(date: string): Promise<Opportunity[]> {
        return this.repository.findByPaymentDueDate(date);
    }

    private async update(opportunityDto: OpportunityDTO): Promise<Opportunity> {
        return this.repository.update(opportunityDto);
    }

    private async exportToBling(wonDeals: OpportunityDTO[]) {
        wonDeals.forEach((deal: OpportunityDTO) => {
            let blingPayment: BlingPaymentDTO = this.blingMapper.toEntity(deal);

            let type = blingPayment.valor >= 0 ? 'receiving' : 'paying';
            blingPayment.valor = Math.abs(blingPayment.valor);

            let endpoint = BLING_ENDPOINT + `/bills/${type}`
            
            if (!deal.blingId) {
                this.http.post(endpoint, blingPayment).toPromise().then(response => {
                    let blingId = response.data.retorno;
                    blingId = blingId['contasreceber'] ?
                        blingId.contasreceber[0].contaReceber.id : blingId.contaspagar[0].contapagar.id;
                    
                    deal.blingId = blingId;
                    this.update(deal);
                });
            }
        });
    }
}