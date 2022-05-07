import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  selezionato = false;
  apri() {
    console.log(this.selezionato);

    this.selezionato = true;
  }
  mostraNomi() {}
}
