export interface TRANS {
    id: number | null,
    userName: string,
    amount: number,
    currency: string,
    txn_date: string

}

export interface CURRENCY {
    key: string,
    value: string
}