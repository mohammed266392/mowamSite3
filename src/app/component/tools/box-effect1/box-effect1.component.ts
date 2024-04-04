import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EffectTestDirective } from '../../../directives/effect-test.directive';

@Component({
  selector: 'app-box-effect1',
  standalone: true,
  imports: [ NgClass, EffectTestDirective],
  templateUrl: './box-effect1.component.html',
  styleUrl: './box-effect1.component.css',
})
export class BoxEffect1Component {

  
  @Input() changeSense : boolean = false

  @Input() index : number = 0

  @Input() firstPhrase: string ="blabla"
  
  @Input() secondPhrase : string ="blabla"
}
