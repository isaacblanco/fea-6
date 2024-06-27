import { Component } from '@angular/core';

@Component({
  selector: 'app-component-ma-1',
  templateUrl: './component-ma-1.component.html',
  styleUrl: './component-ma-1.component.scss',
})
export class ComponentMa1Component {
  showElement: boolean = true;
  items = ['item1', 'item2', 'item3'];
}
