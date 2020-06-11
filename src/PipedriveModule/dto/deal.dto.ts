export class PipedriveDealDTO {
    id: number;
    creator_user_id: {
        id: number,
        name: string,
        email: string,
        has_pic: boolean,
        pic_hash: string,
        active_flag: boolean,
        value: number
    };
    user_id: {
        id: number,
        name: string,
        email: string,
        has_pic: boolean,
        pic_hash: string,
        active_flag: boolean,
        value: number
    };
    person_id: {
        active_flag: boolean,
        name: string,
        email: [
            {
                value: string,
                primary: boolean
            }
        ],
        phone: [
            {
                value: string,
                primary: boolean
            }
        ],
        value: number
    };
    org_id: {
        name: string,
        people_count: number,
        owner_id: number,
        address: any,
        active_flag: boolean,
        cc_email: string,
        value: number
    };
    stage_id: number;
    title: string;
    value: number;
    currency: string;
    add_time: string;
    update_time: string;
    stage_change_time: string;
    active: boolean;
    deleted: boolean;
    status: string;
    probability: number;
    next_activity_date: any;
    next_activity_time: any;
    next_activity_id: any;
    last_activity_id: any;
    last_activity_date: any;
    lost_reason: any;
    visible_to: string;
    close_time: string;
    pipeline_id: number;
    won_time: string;
    first_won_time: string;
    lost_time: any;
    products_count: number;
    files_count: number;
    notes_count: number;
    followers_count: number;
    email_messages_count: number;
    activities_count: number;
    done_activities_count: number;
    undone_activities_count: number;
    participants_count: number;
    expected_close_date: string;
    last_incoming_mail_time: any;
    last_outgoing_mail_time: any;
    label: any;
    stage_order_nr: number;
    person_name: string;
    org_name: string;
    next_activity_subject: any;
    next_activity_type: any;
    next_activity_duration: string;
    next_activity_note: string;
    formatted_value: string;
    weighted_value: number;
    formatted_weighted_value: string;
    weighted_value_currency: string;
    rotten_time: number;
    owner_name: string;
    cc_email: string;
    org_hidden: boolean;
    person_hidden: boolean;
}