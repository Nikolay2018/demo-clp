import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthLogout } from '../../../auth/state/actions/auth.actions';
import { State } from '../../../../reducers';

@Component({
  selector: 'cpl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(private store$: Store<State>) {
  }

  ngOnInit() {
  }

  logout() {
    this.store$.dispatch(new AuthLogout());
  }

}
