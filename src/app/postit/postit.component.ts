import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css'],
})
export class PostitComponent implements OnInit {
  nomi: Array<string> = ['titolo', 'nome', 'data'];
  @Input() selezionato;
  constructor() {}

  ngOnInit() {}
}
