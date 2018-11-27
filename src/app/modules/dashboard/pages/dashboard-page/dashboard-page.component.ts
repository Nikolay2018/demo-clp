import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpl-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
