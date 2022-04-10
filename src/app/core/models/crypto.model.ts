export interface CryptoInfo {
    time: Date;
    disclaimer: string;
    chartName: string;
    bpi: BPI;
}

export interface BPI {
    code: string;
    symbol: string;
    rate: number;
    description: string;
    rate_float: number;
}

