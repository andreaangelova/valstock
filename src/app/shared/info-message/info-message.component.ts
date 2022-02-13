import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-message',
  templateUrl: './info-message.component.html',
  styleUrls: ['./info-message.component.less'],
})
export class InfoMessageComponent implements OnInit {
  message = 'This is a success message!';

  constructor() {}

  ngOnInit(): void {}
}
