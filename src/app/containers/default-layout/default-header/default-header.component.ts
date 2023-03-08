import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {ClassToggleService, HeaderComponent} from '@coreui/angular';
import {User} from "../../../_models/user";
import {AccountService} from "../../../_services/account.service";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  user: User | null;

  constructor(
      private classToggler: ClassToggleService,
      private accountService: AccountService
  ) {
    super();
    this.user = this.accountService.userValue;
  }

  logout() {
    this.accountService.logout();
  }
}
