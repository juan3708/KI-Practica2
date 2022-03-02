import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  soluciones = [
    { id:1, tipo: 'Solución', nombre_seccion: 'Web', tag: 'tag_soluciones', icono: '', titulo: 'Web', descripcion: 'Entregamos soluciones que se ajustan a tus necesidades: Sitefinity, Drupal, Liferay, Open CMS, HTML 5, Cross-Platform, Mobile First, E-commerce, AI, y más', operativo: 1}, 
    { id:2, tipo: 'Solución', nombre_seccion: 'Mobile', tag: 'tag_soluciones', icono: '', titulo: 'Mobile', descripcion: 'Trabajamos en aplicaciones nativas en iOS y Android, desarrollos híbridos con Xamarin, PhoneGap y NativeScript entre otras plataformas', operativo: 1}, 
    { id:3, tipo: 'Solución', nombre_seccion: 'UX', tag: 'tag_soluciones', icono: '', titulo: 'UX', descripcion: 'Realizamos investigación, diagnóstico, diseño de personas, mapas mentales, customer journey, partituras de interacción, AI, ID, test heurísticos', operativo: 1}, 
    { id:4, tipo: 'Solución', nombre_seccion: 'Software', tag: 'tag_soluciones', icono: '', titulo: 'Software', descripcion: 'Desarrollamos proyectos Ágiles, Scrum, LEAN, .Net, PHP, Java, CMMI L2, CMMI L3, Kanban, JQuery, J2EE', operativo: 1},
    { id:5, tipo: 'Solucion', nombre_seccion: 'Consultoria', tag: 'tag_soluciones', icono: '', titulo: 'Consultoría', descripcion: 'Realizamos implementación y mejora de gestión de la demanda, ingeniería de procesos, implementaciones, migraciones, desarrollo de requerimientos', operativo: 1},
    { id:6, tipo: 'Solución', nombre_seccion: 'Hosting', tag: 'tag_soluciones', icono: '', titulo: 'Hosting', descripcion: 'Ofrecemos soporte técnico personalizado, antivirus y antispam, estadísticas de visita, panel de control, Housing, correo corporativo, Data Center, DNS, Cloud Computing, Hosting Dedicado, soporte a Windows, Linux, Solaris, registro de dominios', operativo: 1}
  ];
  textos = [
      {id: 8, nombre_seccion: 'Web', tag: 'tag_webSoluciones', titulo: 'Web', descripcion: 'Nos especializamos en proyectos digitales que implementan plataformas tecnológicas innovadoras, centradas en la experiencia de usuario.', operativo: 1},
      {id: 9, nombre_seccion: 'Mobile', tag: 'tag_mobileSoluciones', titulo: 'Mobile', descripcion: 'Agregamos valor a tu negocio diseñando, desarrollando, o mejorando, tu estrategia móvil con multiplataformas de alta calidad y usabilidad.', operativo: 1},
      {id: 10, nombre_seccion: 'UX', tag: 'tag_UXSoluciones', titulo: 'UX', descripcion: 'Estudiamos y analizamos la conducta de los usuarios y clientes de tu plataforma digital para diseñar un producto que resuelva sus necesidades y lo testeamos para asegurarnos de entregar la mayor satisfacción y mejor experiencia de uso posibles.', operativo: 1},
      {id: 11, nombre_seccion: 'Software', tag: 'tag_softwareSoluciones', titulo: 'Software', descripcion: 'Nuestro equipo de profesionales desarrolla proyectos y aplicaciones en lenguajes tales como ASP.Net, VB.Net, C#, PHP y Java entre otros, usando las últimas arquitecturas y tecnologías del mercado como SOA, J2EE, .NET y los motores de bases de datos más utilizados en el mercado.', operativo: 1},
      {id: 12, nombre_seccion: 'Consultoria', tag: 'tag_consultoriaSoluciones', titulo: 'Consultoría', descripcion: 'Asesoramos en la implementación de metodologías de ingeniería de software, estrategias digitales, gestión de proyectos, desarrollo de talleres y experiencia de usuario entre otros.', operativo: 1},
      {id: 13, nombre_seccion: 'Hosting', tag: 'tag_hostingSoluciones', titulo: 'Hosting', descripcion: 'Nuestro servicio de Hosting está avalado por 20 años de experiencia. Soporte 24 x 7, escalable, seguro, redundancia, alta demanda, tecnología de primer nivel, monitoreo y respaldo, dedicados, compartido, planes a medida, flexibilidad, estabilidad.', operativo: 1},
  ];
  constructor() { }

  ngOnInit(): void {
    this.listAllServices();
    this.listAllTexts();
  }
  listAllServices(){
    return this.soluciones;
  }
  listAllTexts(){
    return this.textos;
  }
}
