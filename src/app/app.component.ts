import { Component } from "@angular/core";

// decorator goes above the thing it is decorating.  @component decorator signifies that it is a component. decorator({})
@Component({
  //derective name
  selector: 'pm-root',
  //template being used by this component
  // template: `<div><h1>{{pageTitle}}</h1>
  //             <div> My first Component</div>
  //             </div>`
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  pageTitle : string = "Acme Product Management"
}