import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-notices',
  templateUrl: './job-notices.component.html',
  styleUrls: ['./job-notices.component.scss'],
})
export class JobNoticesComponent implements OnInit {
  // avisos = [
  //   {
  //     id: 1,
  //     titulo: 'Se requiere contratar Analista Programador',
  //     funciones:
  //       'Que cumpla con las funciones de desarrollar software y aplicaciones web de calidad. Analizar y mantener software de aplicación existente. Diseñar códigos de pruebas, altamente escalables.',
  //     rango_inicial: 600000,
  //     rango_final: 680000,
  //     estado: 'publicado',
  //     cargo_id: 1,
  //   },
  //   {
  //     id: 2,
  //     titulo: 'Buscamos un Gestor de Servicios (Jefe de Proyecto)',
  //     funciones:
  //       'Funciones: Realizar seguimiento de los proyectos. Llevar proyectos a la gerencia y TI y realizar seguimiento. Planteamiento de soluciones de tecnología.',
  //     rango_inicial: 1400000,
  //     rango_final: 1500000,
  //     estado: 'publicado',
  //     cargo_id: 2,
  //   },
  // ];
  // cargos = [
  //   { id: 1, nombre: 'Analista programador', operativo: 1 },
  //   { id: 2, nombre: 'Jefe de proyecto', operativo: 1 },
  // ];
  @ViewChild('closeModal') closeModal: ElementRef;
  avisos;
  aviso_id;
  constructor(private jobsService: JobsService) {

  }

  ngOnInit(): void {
    this.listAllAvisos();
  }

  listAllAvisos(){
    this.jobsService.getJobs().subscribe((resp: any) => {
      console.log(resp);
      this.avisos = resp.avisos;
    })
  }

  forms(nombre, apellido, correo, telefono, direccion, anioExperiencia){
    console.log(nombre, apellido, correo, telefono, direccion, anioExperiencia);
    let data = {
      nombre,
      apellido, 
      correo, 
      telefono,
      direccion,
      anios_de_experiencia:anioExperiencia,
      cv:'',
      operativo: 1,
      aviso_id: this.aviso_id
    };
    this.jobsService.createPostulant(data).subscribe((resp: any) =>{
      console.log(resp);
      if(resp.code===200){
        Swal.fire({
          icon: 'success',
          title: 'Formulario de postulación enviado correctamente',
          showConfirmButton: false,
          timer: 3000
        })
        this.closeModal.nativeElement.click();
      }
    })
    console.log(data);
  }

  setNoticeId(id){
    this.aviso_id= id;
    console.log(id);
  }
}
