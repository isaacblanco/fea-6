import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-component-mb-1',
  templateUrl: './component-mb-1.component.html',
  styleUrl: './component-mb-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentMb1Component {
  public var1 = signal({ name: 'Francesc' });
  public var2 = signal({ name: 'Anna' });

  constructor() {
    setTimeout(() => {
      this.var2.update((item) => ({
        ...item,
        name: 'Marta',
      }));
      console.log('Fin timeout');
    }, 3000);
  }
}
