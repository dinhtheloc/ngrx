import { CryptoState } from "./crypto.state";
import * as CryptoActions from './crypto.actions'

const initialState: CryptoState = {
    data: null,
    status: 'idle',
    error: undefined
}


export function cryptoReducer(
    state: CryptoState = initialState,
    action: CryptoActions.CryptoActions
) {
    switch (action.type) {
        case CryptoActions.GET_BTC_INFO:
            return { ...state, status: 'loading' };

        case CryptoActions.GET_BTC_INFO_SUCCESS:
            const data = action.item
            return { ...state, data, status: 'idle' };

        case CryptoActions.GET_BTC_INFO_FAILED:
            return { ...state, status: 'error', error: action.error };

        default:
            return state;
    }

}