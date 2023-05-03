import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  c1 = [
    "Atendimento ao cliente",
    "Termos e condições",
    "Políticas de privacidade",
    "FAQ – Perguntas frequentes"
  ];
  c2 = [
    "O que é uma Sugar Baby",
    "O que é um Sugar Daddy",
    "O que é uma Sugar Mommy",
    "Relacionamento Sugar",
    "Como conquistar um homem rico",
    "Como funciona",
    "Sobre nós",
    "Imprensa",
    "Brasil"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
