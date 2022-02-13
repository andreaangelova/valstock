import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-message',
  templateUrl: './info-message.component.html',
  styleUrls: ['./info-message.component.less'],
})
export class InfoMessageComponent implements OnInit {
  @Input() message: string;

  constructor() {}

  ngOnInit(): void {}
}
