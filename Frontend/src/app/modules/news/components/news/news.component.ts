import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
// categorias = [
//   { id:1, nombre: 'Destacado'}, 
//   { id:2, nombre: 'Innovacion'}, 
//   { id:3, nombre: 'Tecnologia'}, 
//   { id:4, nombre: 'Blog'}
// ];
// noticias:any = [
//   { id:1, titulo: 'Por qué las metodologías ágiles permiten crear proyectos exitosos', cuerpo: 'Las metodologías ágiles se consolidan como una forma de trabajo que incrementa la productividad, efectividad y excelencia en los resultados.', estado: 'Publicada', img: '', categoria_id: 1}, 
//   { id:2, titulo: 'Storytelling en tus estrategias: historias que atraen', cuerpo: 'Existen herramientas que permiten a las empresas ser referentes entre los consumidores, el Storytelling destaca entre ellas por su efectividad.', estado: 'Publicada', img: '', categoria_id: 2},
//   { id:3, titulo: 'Cómo el IoT genera valor en los negocios', cuerpo: 'Millones de sensores y dispositivos en el mundo se conectan, para dar paso a un exitoso engranaje tecnológico.', estado: 'Publicada', img: '', categoria_id: 3},
//   { id:4, titulo: 'Implementar IoT para innovar y conectar la industria', cuerpo: 'El Iot se consolida como tecnología emergente que se desarrolla a escala mundial, esto gracias a sus múltiples sus beneficios.', estado: 'Publicada', img: '', categoria_id: 4},
//   { id:5, titulo: 'Implementar IoT para innovar y conectar la industria', cuerpo: 'El Iot se consolida como tecnología emergente que se desarrolla a escala mundial, esto gracias a sus múltiples sus beneficios.', estado: 'Publicada', img: '', categoria_id: 4},
//   { id:6, titulo: 'Implementar IoT para innovar y conectar la industria', cuerpo: 'El Iot se consolida como tecnología emergente que se desarrolla a escala mundial, esto gracias a sus múltiples sus beneficios.', estado: 'Publicada', img: '', categoria_id: 4},
// ];
  categorias;
  noticias;

  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit(): void {
    this.listAllCategory();
    this.listAllNews();
  }
  listAllCategory(){
    this.newsService.getCategorias().subscribe((resp:any) => {
      console.log(resp);
      this.categorias = resp.categorias;
    })
  }
  listAllNews(){
    return this.newsService.getNoticias().subscribe((resp:any) => {
      console.log(resp);
      this.noticias = resp.noticias;
    });
  }
  findNewsByCategory(id){
    this.newsService.getNoticias().subscribe((resp:any) => {
      console.log(resp);
      this.noticias = resp.noticias;
      this.noticias = this.noticias.filter(noticia => noticia.categorium.id === id);
    });
  }
  onSelectNews(news){
    console.log(news);
    let title = news.titulo.replaceAll(' ', '-').toLowerCase();
    this.router.navigate(['/news', title], {state:{
      news
    }});
    console.log(title);
  }
}
