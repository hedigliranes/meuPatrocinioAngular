import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listItens = [
    "O que é uma Sugar Baby",
    "O que é um Sugar Daddy",
    "O que é uma Sugar Mommy",
    "Relacionamento Sugar",
    "Como conquistar um homem rico"
  ];

  listItensPrimary = [
    "Como Funciona",
    "Blog",
    "Imprensa",
    "Entrar",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
