import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-notices',
  templateUrl: './job-notices.component.html',
  styleUrls: ['./job-notices.component.scss'],
})
export class JobNoticesComponent implements OnInit {
  avisos = [
    {
      id: 1,
      titulo: 'Se requiere contratar Analista Programador',
      funciones:
        'Que cumpla con las funciones de desarrollar software y aplicaciones web de calidad. Analizar y mantener software de aplicación existente. Diseñar códigos de pruebas, altamente escalables.',
      rango_inicial: 600000,
      rango_final: 680000,
      estado: 'publicado',
      cargo_id: 1,
    },
    {
      id: 2,
      titulo: 'Buscamos un Gestor de Servicios (Jefe de Proyecto)',
      funciones:
        'Funciones: Realizar seguimiento de los proyectos. Llevar proyectos a la gerencia y TI y realizar seguimiento. Planteamiento de soluciones de tecnología.',
      rango_inicial: 1400000,
      rango_final: 1500000,
      estado: 'publicado',
      cargo_id: 2,
    },
  ];
  cargos = [
    { id: 1, nombre: 'Analista programador', operativo: 1 },
    { id: 2, nombre: 'Jefe de proyecto', operativo: 1 },
  ];
  constructor() {

  }

  ngOnInit(): void {}
  listAllAvisos() {
    return (this.avisos = [
      {
        id: 1,
        titulo: 'Se requiere contratar Analista Programador',
        funciones:
          'Que cumpla con las funciones de desarrollar software y aplicaciones web de calidad. Analizar y mantener software de aplicación existente. Diseñar códigos de pruebas, altamente escalables.',
        rango_inicial: 600000,
        rango_final: 680000,
        estado: 'publicado',
        cargo_id: 1,
      },
      {
        id: 2,
        titulo: 'Buscamos un Gestor de Servicios (Jefe de Proyecto)',
        funciones:
          'Funciones: Realizar seguimiento de los proyectos. Llevar proyectos a la gerencia y TI y realizar seguimiento. Planteamiento de soluciones de tecnología.',
        rango_inicial: 1400000,
        rango_final: 1500000,
        estado: 'publicado',
        cargo_id: 2,
      },
    ]);
  }

  listAllCargos() {
    return (this.cargos = [
      { id: 1, nombre: 'Analista programador', operativo: 1 },
      { id: 2, nombre: 'Jefe de proyecto', operativo: 1 },
    ]);
  }
}
