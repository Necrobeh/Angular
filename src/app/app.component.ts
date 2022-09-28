import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  isAdmin: boolean = true;

  switchAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
