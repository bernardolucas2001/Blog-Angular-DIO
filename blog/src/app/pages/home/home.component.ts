import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { SmallCardComponent } from '../../componentes/small-card/small-card.component';
import { BigCardComponent } from '../../componentes/big-card/big-card.component';
import { MenuTitleComponent } from '../../componentes/menu-title/menu-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ContentComponent, SmallCardComponent, BigCardComponent, MenuTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
