import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store/app.state';
import { getBtcInfo } from 'src/app/core/store/crypto/crypto.actions';
import { cryptoInfoSelector, cryptoStatusSelector } from 'src/app/core/store/crypto/crypto.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data$: Observable<any>;
  status$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.data$ = this.store.select(cryptoInfoSelector);
    this.status$ = this.store.select(cryptoStatusSelector);
  }

  ngOnInit(): void {
  }

  getData() {
    this.store.dispatch(getBtcInfo());

  }

}
