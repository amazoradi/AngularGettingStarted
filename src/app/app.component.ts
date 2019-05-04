import { Component } from "@angular/core";

// decorator goes above the thing it is decorating.  @component decorator signifies that it is a component. decorator({})
@Component({
  //derective name
  selector: 'pm-root',
  //template being used by this component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  pageTitle : string = "Acme Product Management"
}