export class PipedriveWebhookPayload {
    v: number;
    matches_filters: {
        current: any[],
        previous: any[]
    };
    meta: {
        v: number,
        action: string,
        object: string,
        id: number,
        company_id: number,
        user_id: number,
        type: string,
        host: string,
        timestamp: number,
        timestamp_micro: number,
        permitted_user_ids: any[],
        trans_pending: boolean,
        is_bulk_update: boolean,
        pipedrive_service_name: boolean,
        matches_filters: {
            current: any[],
            previous: any[]
        },
        webhook_id: number
    };
    retry: number;
    current: any;
    previous: any;
    event: string;
}