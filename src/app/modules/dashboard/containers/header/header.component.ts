import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthLogout } from '../../../auth/state/actions/auth.actions';
import { State } from '../../../../reducers';
import { Observable } from 'rxjs';
import { getUserAvatar, getUsername } from '../../../auth/state/reducers/index.reducer';

@Component({
  selector: 'cpl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public username$: Observable<string>;
  public avatar$: Observable<string>;

  constructor(private store$: Store<State>) {
  }

  ngOnInit() {
    this.username$ = this.store$.pipe(select(getUsername));
    this.avatar$ = this.store$.pipe(select(getUserAvatar));
  }

  logout() {
    this.store$.dispatch(new AuthLogout());
  }

}
