import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public titulo: string;

  public texto: string

  constructor() {
    this.titulo = "";
    this.texto = "";
   }

  ngOnInit(): void {
    this.titulo = "Primeira página";
    this.texto = "Olá, tudo bem?";
  }

  clicou() {
    this.texto = "clicou!"
  }

}
