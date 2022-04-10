import { createAction, props, ActionType } from "@ngrx/store";

import { CryptoInfo } from "../../models/crypto.model";

export const GET_BTC_INFO = '@BTCInfo/Get';
export const GET_BTC_INFO_SUCCESS = '@BTCInfo/GetSuccess';
export const GET_BTC_INFO_FAILED = '@BTCInfo/GetFailed';


export const getBtcInfo = createAction(GET_BTC_INFO);
export const getBtcInfoSuccess = createAction(GET_BTC_INFO_SUCCESS, props<{ item: CryptoInfo }>());
export const getBtcInfoFailed = createAction(GET_BTC_INFO_FAILED, props<{ error?: string }>());


export type CryptoActions =
    | ActionType<typeof getBtcInfo>
    | ActionType<typeof getBtcInfoSuccess>
    | ActionType<typeof getBtcInfoFailed>