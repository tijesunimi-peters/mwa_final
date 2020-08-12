import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent implements OnInit {
  @Input("errors") errors = [];
  constructor() { }

  ngOnInit(): void {
  }

}
