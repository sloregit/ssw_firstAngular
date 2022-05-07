import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostitComponent } from './postit/postit.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PostitComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
