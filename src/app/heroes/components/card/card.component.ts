import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent implements OnInit {
  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
