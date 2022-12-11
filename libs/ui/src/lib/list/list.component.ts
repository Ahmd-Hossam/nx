import { Component, Input } from '@angular/core';

@Component({
  selector: 'jurgen-app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() cars: any;
}
