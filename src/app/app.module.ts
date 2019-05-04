import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';


//id class as a module using the ngmodule decorator and pass in meta data
@NgModule({
  //which components belong to this module
  declarations: [
    AppComponent,
    ProductListComponent 
  ],
  //external modules we want avialiable to all componentns of this module
  imports: [
    BrowserModule
  ],
  //defines startup component, contains selecotr comp used in our index.html
  bootstrap: [AppComponent]
})
// name classes in PascalCasing, camelCase for methods and props
export class AppModule { }
