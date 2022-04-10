import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs";
import { CryptoService } from "../../services/crypto.service";
import * as cryptoActions from "./crypto.actions";

@Injectable()
export class CryptoEffects {

    loadCryptoInfo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(cryptoActions.getBtcInfo),
            /** An EMPTY observable only emits completion. Replace with your own observable stream */
            // operator
            mergeMap(() => this.cryptoService.getCryptoInfo()),
            map(data => cryptoActions.getBtcInfoSuccess({ item: data })),
            catchError(async (error) => cryptoActions.getBtcInfoFailed({ error }))
        ));

    constructor(
        private actions$: Actions,
        private cryptoService: CryptoService
    ) { }
}