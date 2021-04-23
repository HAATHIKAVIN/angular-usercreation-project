import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input'
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormGroup, FormControl} from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, FormsModule,MatInputModule,ReactiveFormsModule,BrowserAnimationsModule,MatSelectModule, RouterModule.forRoot([
      { path: '', component: UserCreationComponent  },

      
    ]) ],
  declarations: [ AppComponent, TopBarComponent, UserCreationComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
