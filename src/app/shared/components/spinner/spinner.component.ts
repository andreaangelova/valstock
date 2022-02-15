import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less'],
})
export class SpinnerComponent implements OnInit {
  subscription: Subscription;

  constructor(
    private spinner: NgxSpinnerService,
    private spinnerService: SpinnerService
  ) {
    this.subscription = this.spinnerService.show.subscribe((data) =>
      data ? this.spinner.show() : this.spinner.hide()
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
