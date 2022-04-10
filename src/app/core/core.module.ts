import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { cryptoReducer } from './store/crypto/crypto.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CryptoEffects } from './store/crypto/crypto.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('feature_crypto', cryptoReducer),
    EffectsModule.forFeature([CryptoEffects])
  ]
})
export class CoreModule { }
