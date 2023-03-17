import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

import {IconSetService} from '@coreui/icons-angular';
import {iconSubset} from './icons/icon-subset';
import {Title} from '@angular/platform-browser';
import {AccountService} from "./_services/account.service";
import {User} from "./_models/user";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'Drinkit Admin';
  user?: User | null;

  constructor(
      private router: Router,
      private titleService: Title,
      private iconSetService: IconSetService,
      private accountService: AccountService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = {...iconSubset};
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
