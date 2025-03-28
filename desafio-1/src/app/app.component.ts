import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ContentComponent } from "./components/content/content.component";

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, MenuComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-1';
}
