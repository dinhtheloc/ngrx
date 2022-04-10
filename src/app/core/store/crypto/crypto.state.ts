import { CryptoInfo } from "../../models/crypto.model";


export interface CryptoState {
    data: CryptoInfo | null;
    status: 'idle' | 'loading' | 'error';
    error?: string;
}
