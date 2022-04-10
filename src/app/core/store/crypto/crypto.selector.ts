import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CryptoState } from "./crypto.state";

const featureCrypto = createFeatureSelector<CryptoState>('feature_crypto');
export const cryptoInfoSelector = createSelector(featureCrypto, state => state.data);
export const cryptoStatusSelector = createSelector(featureCrypto, state => state.status);