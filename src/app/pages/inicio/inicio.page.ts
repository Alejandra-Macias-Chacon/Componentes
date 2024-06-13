import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

// crear nuevo listado

// componentes:  any [] = [];
componentes: Componente[] = [
    {
      icon: 'settings-outline',
      name: 'Input',
      redirectTo: '/input'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
