import { Component, OnInit } from '@angular/core';
import { MenuWidgetsModule, MenuItem } from 'portalface/widgets';
import { HttpUtil } from '../general/util/httpUtil.service';
import { ReHeaderService } from './re-header.service';

@Component({
  selector: 're-header',
  templateUrl: './re-header.component.html',
  styleUrls: ['./re-header.component.scss']
})
export class ReHeaderComponent implements OnInit {

  tabmenuData: MenuItem[] = [];

// { label: 'Stats', icon: 'fa-bar-chart' },
// { label: 'Calendar', icon: 'fa-calendar' },
// { label: 'Documentation', icon: 'fa-book' },
// { label: 'Support', icon: 'fa-support' },
// { label: 'Social', icon: 'fa-twitter' }

  constructor(public reHeaderService: ReHeaderService) {
  }

  ngOnInit() {
    this.reHeaderService.getBookCategory(this);
  }

}
