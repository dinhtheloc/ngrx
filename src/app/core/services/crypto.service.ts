import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptoInfo } from '../models/crypto.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getCryptoInfo() {
    return this.http.get<CryptoInfo>(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  }
}
