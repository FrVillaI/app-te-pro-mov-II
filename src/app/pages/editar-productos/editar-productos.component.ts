import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProdctosService } from '../../service/prodctos.service';

@Component({
  selector: 'app-editar-productos',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './editar-productos.component.html',
  styleUrl: './editar-productos.component.css'
})
export class EditarProductosComponent {
  servicio = inject(ProdctosService)
  ruta = inject(Router)
  router = inject(ActivatedRoute)

  id: any
  nombre:any
  codigo:any
  descripcion:any
  categoria:any
  url:any
  precio:any

  ngOnInit() {
    this.router.params.subscribe(r => {
      this.servicio.getProductosID(r['idProducto']).subscribe(p => {
        this.id = p.id
        this.nombre = p.nombre
        this.codigo = p.codigo
        this.descripcion = p.descripcion
        this.categoria = p.categoria
        this.url = p.url
        this.precio = p.precio

      })
    })
  }

  editar(datos: any) {
    this.servicio.putProductos(datos.value).subscribe()
    this.ruta.navigateByUrl("lista-productos")
  }
}


