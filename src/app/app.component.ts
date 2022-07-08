import {Component, OnInit} from '@angular/core';
import {ThemeService} from "./theme.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{


  title = 'MonPremierSIteWeb';


  ngOnInit(): void {  }

  isDarkMode: boolean;
  showFiller = false;

  constructor(private themeService: ThemeService, public dialog: MatDialog) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }

}

